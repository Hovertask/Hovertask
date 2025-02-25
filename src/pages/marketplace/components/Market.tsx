import { BsArrowLeft } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import { useEffect, useRef, useState } from "react";
import { Product } from "./ProductCard";
import ProductsSection from "./ProductsSection";

const products: Product[] = [
    {
        name: "Product 1",
        price: 100,
        discount: 10,
        reviews_count: 150,
        rating: 4.5,
        available_units: 20,
        featured_image_url: "https://via.placeholder.com/150"
    },
    {
        name: "Product 2",
        price: 200,
        discount: 15,
        reviews_count: 85,
        rating: 4.0,
        available_units: 50,
        featured_image_url: "https://via.placeholder.com/150"
    },
    {
        name: "Product 3",
        price: 300,
        discount: 20,
        reviews_count: 200,
        rating: 4.8,
        available_units: 10,
        featured_image_url: "https://via.placeholder.com/150"
    }
];

const Market = () => {
    const location = useLocation();

    return (
        <div className="bg-white shadow-md px-4 py-8 space-y-8 overflow-hidden">
            {/* Only show this component on the dashboard */}
            {location.pathname.includes("dashboard") && (
                <div className="flex items-center gap-4">
                    <div>
                        <BsArrowLeft size={30} />
                    </div>
                    <div>
                        <h2 className="text-2xl">Welcome to Hovertask Marketplace</h2>
                        <p className="text-xs text-[#000000BF]">
                            Your one-stop platform to buy, sell, and earn effortlessly.
                        </p>
                    </div>
                </div>
            )}

            {/* Hero */}
            <Hero />
            {/* Hero */}

            <div className="my-6">
                <p className="font-light text-[#000000BF]">
                    Discover trending products and services or showcase yours to thousands of buyers daily.
                </p>
            </div>

            <TrendingProductsAndServices />
            <BlackFridaySales />
            <BannersCarousel />
            <BestDealServices />
            <TrendingWomensWear />
            <BlackFridaySales />
            <HottestDeals />
            <BannersCarousel />
        </div>
    );
};

const TrendingProductsAndServices = () => {
    return <ProductsSection heading="Trending Products & Services" products={products} />;
};

const BlackFridaySales = () => {
    return (
        <div className="grid [grid-template-columns:_auto_1fr] items-center gap-6 overflow-auto no-scrollbar">
            <div className="w-[192px]">
                <img src="/assets/images/Group 1000004394.png" alt="Black friday banner" className="block w-fit" />
            </div>
            <ProductsSection products={products} />
        </div>
    );
};

const BestDealServices = () => {
    return (
        <ProductsSection
            startComponent={<ProductsSection vertical products={products} />}
            heading="Best Deal Services"
            products={products}
        />
    );
};

const TrendingWomensWear = () => {
    return <ProductsSection heading="Trending Women's Wear" products={products} />;
};

const HottestDeals = () => {
    return (
        <ProductsSection
            startComponent={<ProductsSection vertical products={products} />}
            heading="Hottest Deals"
            products={products}
        />
    );
};

const BannersCarousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const width = carouselRef.current?.clientWidth;
        carouselRef.current?.scroll({ left: width! * (currentSlide - 1) });
    }, [currentSlide, carouselRef.current]);

    useEffect(() => {
        const interval = setInterval(() => setCurrentSlide((prev) => (prev === 3 ? 1 : prev + 1)), 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-2">
            <div ref={carouselRef} className="flex overflow-auto no-scrollbar items-center">
                <img className="w-full h-auto" src="/assets/images/Group 1000004390.png" alt="Banner" />
                <img className="w-full h-auto" src="/assets/images/Group 1000004393.png" alt="Banner" />
                <img className="w-full h-auto" src="/assets/images/Group 1000004395.png" alt="Banner" />
            </div>
            <div className="grid grid-cols-4 gap-1 w-[108px] mx-auto">
                <span
                    className={`${
                        currentSlide === 1 ? "col-span-2 bg-base" : "bg-[#B3B3B3]"
                    } h-[3.47px] w-full rounded-full inline-block`}
                ></span>
                <span
                    className={`${
                        currentSlide === 2 ? "col-span-2 bg-base" : "bg-[#B3B3B3]"
                    }  h-[3.47px] w-full rounded-full inline-block"`}
                ></span>
                <span
                    className={`${
                        currentSlide === 3 ? "col-span-2 bg-base" : "bg-[#B3B3B3]"
                    }  h-[3.47px] w-full rounded-full inline-block"`}
                ></span>
            </div>
        </div>
    );
};

export default Market;
