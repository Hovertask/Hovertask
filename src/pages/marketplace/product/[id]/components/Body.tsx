import { ReactNode, useEffect, useRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import { GiRoundStar } from "react-icons/gi";
import { GoEye, GoLocation } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { Link, useLocation, useParams } from "react-router-dom";

/**
 * Lightweight module-level cache to avoid refetching the same product.
 * This is memory-only and automatically used with a simple stale-while-revalidate pattern.
 */
const productCache = new Map<string, { ts: number; data: ProductApiResponse }>();
const STALE_MS = 1000 * 60 * 2; // 2 minutes freshness

// --- Types (match your backend response shape) ---
export interface ProductImage {
  id: number;
  product_id: number;
  file_path: string | null;
  video_path: string | null;
  media_type: string | null;
  public_id: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface ProductApiResponse {
  id?: number;
  user_id: number;
  category_id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  images: string | null;
  status: string;
  location: string | null;
  currency: string;
  discount: string;
  payment_method: string;
  meet_up_preference: string | null;
  delivery_fee: string;
  estimated_delivery_date: string;
  phone_number: string;
  email: string;
  social_media_link: string;
  video_path: string | null;
  resell_budget: string | null;
  product_images: ProductImage[];
  created_at?: string;
  updated_at?: string;
  views?: number;
}

// --- Utility: pick image urls from API product ---
const productImagesFromAPI = (p: ProductApiResponse) =>
  (p.product_images || [])
    .map((pi) => pi.file_path)
    .filter(Boolean) as string[];

// --- Component ---
const SingleProductBody = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const [product, setProduct] = useState<ProductApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // carousel state
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imageCarouselRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // fetch product with simple stale-while-revalidate behavior + abort support
  useEffect(() => {
    if (!id) return;

    let aborted = false;
    const controller = new AbortController();
    const sig = controller.signal;

    const cached = productCache.get(id);
    if (cached && Date.now() - cached.ts < STALE_MS) {
      // fresh cache -> use immediately
      setProduct(cached.data);
      setLoading(false);
      // still attempt background revalidate but don't block UI
      fetchAndCache(false);
      return;
    }

    // if stale but present, show stale and revalidate
    if (cached) {
      setProduct(cached.data);
      setLoading(false);
      fetchAndCache(false);
    } else {
      // no cache -> fetch and populate UI
      fetchAndCache(true);
    }

    async function fetchAndCache(showLoading: boolean) {
      try {
        if (showLoading) {
          setLoading(true);
          setError(null);
        }

        // IMPORTANT: set cache-control or rely on CDN/CDN headers server-side
        const res = await fetch(`https://backend.hovertask.com/api/show-product-landing-page/${id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          signal: sig,
          // 'cache' could be 'default' or 'no-cache' depending on your needs
          // cache: "no-cache"
        });

        if (!res.ok) {
          if (res.status === 404) throw new Error("Product not found");
          throw new Error(`Failed to load product (status ${res.status})`);
        }

        const json: ProductApiResponse = await res.json();

        // store in cache
        productCache.set(id ?? "", { ts: Date.now(), data: json });

        if (!aborted) {
          setProduct(json);
          setError(null);
        }
      } catch (err: any) {
        if (err.name === "AbortError") {
          // ignore
        } else {
          console.error("fetch product error:", err);
          if (!aborted) setError(err.message || "Failed to fetch product");
        }
      } finally {
        if (!aborted) setLoading(false);
      }
    }

    return () => {
      aborted = true;
      controller.abort();
    };
  }, [id]);

  // Carousel scroll sync
  useEffect(() => {
    const singleSlideWidth = imageCarouselRef.current?.clientWidth ?? 0;
    if (imageCarouselRef.current) {
      imageCarouselRef.current.scrollTo({
        left: singleSlideWidth * activeImageIndex,
        behavior: "smooth",
      });
    }
  }, [activeImageIndex]);

  useEffect(() => {
    const updateActiveIndexOnScrollEnd = () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        const singleSlideWidth = imageCarouselRef.current?.clientWidth ?? 1;
        const scrollLeft = imageCarouselRef.current?.scrollLeft ?? 0;
        const idx = Math.round(scrollLeft / singleSlideWidth);
        setActiveImageIndex(idx);
      }, 80);
    };

    const el = imageCarouselRef.current;
    if (el) {
      el.addEventListener("scroll", updateActiveIndexOnScrollEnd);
    }
    return () => {
      if (el) el.removeEventListener("scroll", updateActiveIndexOnScrollEnd);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  // derive images array
  const images = product ? productImagesFromAPI(product) : [];

  // Render states
  if (loading && !product) {
    return (
      <div className="p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-64 bg-gray-200 rounded" />
          <div className="h-6 bg-gray-200 rounded w-1/2" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
        </div>
      </div>
    );
  }

  if (error && !product) {
    return (
      <div className="p-8">
        <p className="text-red-500">Error: {error}</p>
        <Link to="/marketplace" className="text-base text-blue-600">
          Back to marketplace
        </Link>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-8">
        <p>Product not available.</p>
      </div>
    );
  }

  // UI content uses product object now
  const title = product.name;
  const description = product.description || "";
  const price = Number(product.price || 0);
  const stock = product.stock ?? 0;
  const reviews_count = 0; // placeholder if you don't have reviews endpoint
  const rating = 0; // placeholder

  return (
    <div className="bg-white shadow px-4 py-8 space-y-8 overflow-hidden">
      <header className="flex gap-4">
        <Link to={location.pathname.includes("dashboard") ? "/dashboard/marketplace" : "/marketplace"}>
          <BsArrowLeft size={25} />
        </Link>
        <div className="flex items-center gap-4">
          <img
            src="/assets/images/demo-avatar.png"
            width={52}
            alt="Seller avatar"
            className="rounded-full"
            loading="lazy"
          />
          <div>
            <h1 className="text-2xl">{product?.user_id ? "Seller" : "Seller"}</h1>
            <Link className="text-base" to={`/marketplace/seller/${product.user_id ?? ""}`}>
              View Profile
            </Link>
          </div>
        </div>
      </header>

      {/* Image carousel */}
      <div>
        <div className="relative overflow-hidden space-y-3">
          {images.length > 1 && (
            <>
              {activeImageIndex > 0 && (
                <button
                  onClick={() => setActiveImageIndex((i) => Math.max(0, i - 1))}
                  className="cursor-pointer p-2 absolute top-1/2 left-4 -translate-y-1/2 z-10"
                  aria-label="Previous"
                >
                  <TfiAngleLeft size={30} />
                </button>
              )}
              {activeImageIndex < images.length - 1 && (
                <button
                  onClick={() => setActiveImageIndex((i) => Math.min(images.length - 1, i + 1))}
                  className="cursor-pointer p-2 absolute top-1/2 right-4 -translate-y-1/2 z-10"
                  aria-label="Next"
                >
                  <TfiAngleRight size={30} />
                </button>
              )}
            </>
          )}

          <div ref={imageCarouselRef} className="max-w-full overflow-auto snap-mandatory snap-x flex no-scrollbar">
            {images.length > 0 ? (
              images.map((image) => (
                <div className="snap-center snap-always w-full min-w-full max-w-full" key={image}>
                  <img className="max-w-[90%] block mx-auto" src={image} alt={title} loading="lazy" />
                </div>
              ))
            ) : (
              <div className="snap-center snap-always w-full min-w-full max-w-full">
                <img className="max-w-[90%] block mx-auto" src={product.images || "/placeholder.png"} alt={title} />
              </div>
            )}
          </div>

          <div className="flex overflow-auto justify-end gap-4">
            {(images.length ? images : [product.images || "/placeholder.png"]).map((image, i) => (
              <button className="cursor-pointer" onClick={() => setActiveImageIndex(i)} key={i} aria-label={`show image ${i + 1}`}>
                <img className="h-[52px] w-auto object-cover rounded" src={image} alt="" loading="lazy" />
              </button>
            ))}
          </div>

          <div style={{ gridTemplateColumns: `repeat(${(images.length || 1)}, 14px)` }} className="w-fit grid gap-2 mx-auto">
            {(images.length ? images : [product.images || "/placeholder.png"]).map((_, i) => (
              <div key={i} className={`${activeImageIndex === i ? "bg-base col-span-2" : "bg-[#B3B3B3]"} h-0.75`}></div>
            ))}
          </div>
        </div>

        {/* Product description */}
        <div className="bg-gradient-to-b from-white to-[#DAE2FF] py-8 px-1 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="space-y-1 col-span-9">
              <h2 className="text-xl">{title}</h2>
              <p className="text-sm text-[#000000BF]">{description}</p>

              <Info heading="Brand" value={product?.category_id ?? "N/A"} />
              <Info heading="Stock" value={stock} />
              <Info heading="Location" value={product.location ?? "N/A"} />
            </div>

            <div className="col-span-2 flex flex-col justify-between space-y-3">
              {/* Price */}
              <div className="relative before:absolute before:w-full before:h-full before:bg-gradient-to-b before:from-[#4B70F5] before:to-[#2C418F00] before:rounded-lg before:-rotate-6 before:z-0 before:opacity-20">
                {product.discount && Number(product.discount) > 0 && (
                  <p className="line-through text-[#77777A] text-xs relative">₦{price.toFixed(2)}</p>
                )}
                <p className="text-[22.77px] relative">
                  ₦{(price - (Number(product.discount) || 0)).toFixed(2)}
                </p>
              </div>
              {/* actions */}
              <div className="flex gap-3 justify-center p-2 rounded-md bg-gradient-to-b from-[#DAE2FF] to-[#DAE2FF00]">
                <button>
                  <IoHeartOutline />
                </button>
                <button>
                  <CiShare2 />
                </button>
              </div>
            </div>
          </div>

          <div className="h-1 border-t border-dashed border-[#66666666] w-[80%] mx-auto"></div>

          <div className="flex gap-4 justify-between text-sm text-[#77777A]">
            <div className="flex gap-6 items-center">
              <span className="inline-flex items-center gap-2">
                <GoLocation /> {product.location ?? "Unknown location"}
              </span>
              <span>|</span>
              <span className="inline-flex items-center gap-2">
                <GoEye /> {product?.views ?? "—"} views
              </span>
            </div>
            <div className="flex gap-6">
              <span className="text-base">({reviews_count} Reviews)</span>
              <span>{stock} units</span>
              <span className="flex items-center gap-2">
                <b className="text-black">{rating || 0}</b>
                {Array(5)
                  .fill(true)
                  .map((_, i) => (
                    <GiRoundStar color="#F5B300" key={i} />
                  ))}
              </span>
            </div>
          </div>

          <div className="flex gap-6 flex-wrap">
            <button className="px-6 py-4 cursor-pointer active:scale-90 transition-transform bg-base rounded-[20.01px] text-white">
              Contact Seller
            </button>
            <button className="px-6 py-4 cursor-pointer active:scale-90 transition-transform border-base border-1 rounded-[20.01px] text-base">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Customer feedback */}
      <div className="space-y-4">
        <h2>Customer Feedback</h2>
        <div className="space-y-6">
          <Feedback
            name="Onah Victor"
            rating={5}
            comment="Amazing sound quality and super comfortable to wear! The battery life is a game-changer."
            date="Dec.29,2024"
          />
          <Feedback
            name="Onah Victor"
            rating={5}
            comment="Amazing sound quality and super comfortable to wear! The battery life is a game-changer."
            date="Dec.29,2024"
          />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-base text-[13.34px] font-medium">You want to resell this product and make profit?</h2>
        <p className="font-light">
          To start reselling this product, simply click the button below to generate your unique reseller link. This
          personalized link will track all your sales for this specific product. 💰 Commission Details:You will earn a
          reseller commission of ₦10,000 every time someone purchases this product using your unique link. Take Action
          Now!Click the button below and start earning today!
        </p>
        <div>
          <h3 className="text-lg">💰Commission Details:</h3>
          <p className="font-light">
            You will earn a reseller commission of ₦10,000 every time someone purchases this product using your unique
            link.
          </p>
        </div>
        <div className="flex justify-between flex-wrap gap-2">
          <div>
            <h3 className="text-lg">Take Action Now!</h3>
            <p className="font-light">Click the button to start earning today.</p>
          </div>
          <button className="px-6 py-4 cursor-pointer active:scale-90 transition-transform bg-base rounded-[20.01px] text-white">
            Generate Reseller Link
          </button>
        </div>
      </div>
    </div>
  );
};

// Feedback & Info components (unchanged except typing)
const Feedback = ({ name, rating, comment, date }: { name: string; rating: number; comment: string; date: string }) => {
  return (
    <div className="max-w-[294px] space-y-1">
      <div className="flex gap-2 items-center">
        <img width={28.089} src="/assets/images/demo-avatar.png" alt={name} />
        <p className="flex items-center gap-2">
          <span className="text-[14.04px]">{name}</span>
          <img width={14.04} src="/assets/images/twemoji_flag-nigeria.png" alt="Flag" /> |{" "}
          <span className="text-[#77777A] text-[10.53px]">{date}</span>
        </p>
      </div>
      <div className="flex gap-1">
        {Array(rating)
          .fill(true)
          .map((_, i) => (
            <GiRoundStar color="#F5B300" key={i} />
          ))}
      </div>
      <p className="text-[10.53px] text-[#77777A]">{comment}</p>
    </div>
  );
};

const Info = ({ heading, value }: { heading: string; value: ReactNode }) => (
  <p className="text-sm">
    <b>{heading}:</b> <span className="text-[#000000BF]">{value}</span>
  </p>
);

export default SingleProductBody;
