import { ReactNode, useEffect, useRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CiShare2 } from "react-icons/ci";
import { GiRoundStar } from "react-icons/gi";
import { GoEye, GoLocation } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { Link } from "react-router-dom";

const SingleProductBody = () => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const imageCarouselRef = useRef<HTMLDivElement>(null);
    const timeout = useRef<number>(null);
    const images = ["/assets/images/demo-product.png", "/assets/images/demo-product-2.png"];

    useEffect(() => {
        const singleSlideWidth = imageCarouselRef.current?.clientWidth;
        imageCarouselRef.current?.scroll({ left: singleSlideWidth! * activeImageIndex });
    }, [activeImageIndex]);

    useEffect(() => {
        const updateActiveIndexOnScrollEnd = () => {
            if (timeout.current) clearTimeout(timeout.current!);

            timeout.current = setTimeout(() => {
                const singleSlideWidth = imageCarouselRef.current?.clientWidth;
                const scrollLeft = imageCarouselRef.current?.scrollLeft;

                setActiveImageIndex(Math.round(scrollLeft! / singleSlideWidth!));
            }, 100);
        };

        imageCarouselRef.current?.addEventListener("scroll", updateActiveIndexOnScrollEnd);
        return () => {
            imageCarouselRef.current?.removeEventListener("scroll", updateActiveIndexOnScrollEnd);
        };
    });

    return (
        <div className="bg-white shadow-md px-4 py-8 space-y-8 overflow-hidden">
            <header className="flex gap-4">
                <Link to={location.pathname.includes("dashboard") ? "/dashboard/marketplce" : "/marketplace"}>
                    <BsArrowLeft size={25} />
                </Link>
                <div className="flex items-center gap-4">
                    <img src="/assets/images/demo-avatar.png" width={52} alt="Seller avatar" />
                    <div>
                        <h1 className="text-2xl">Datalite Gadgets</h1>
                        <Link className="text-base" to="/marketplace/seller/id">
                            View Profile
                        </Link>
                    </div>
                </div>
            </header>

            {/* Image carousel */}
            <div>
                <div className="relative overflow-hidden space-y-3">
                    {/* Nav buttons */}
                    {images.length > 1 && (
                        <>
                            {activeImageIndex > 0 && (
                                <button
                                    onClick={() => setActiveImageIndex(activeImageIndex - 1)}
                                    className="cursor-pointer p-2 absolute top-1/2 left-4 -translate-y-1/2"
                                >
                                    <TfiAngleLeft size={30} />
                                </button>
                            )}
                            {activeImageIndex < images.length - 1 && (
                                <button
                                    onClick={() => setActiveImageIndex(activeImageIndex + 1)}
                                    className="cursor-pointer p-2 absolute top-1/2 right-4 -translate-y-1/2"
                                >
                                    <TfiAngleRight size={30} />
                                </button>
                            )}
                        </>
                    )}
                    {/* Nav buttons */}

                    <div
                        ref={imageCarouselRef}
                        className="max-w-full overflow-auto snap-mandatory snap-x flex no-scrollbar"
                    >
                        {images.map((image) => (
                            <div className="snap-center snap-always w-full min-w-full max-w-full" key={image}>
                                <img className="max-w-[90%] block mx-auto" src={image} alt="" />
                            </div>
                        ))}
                    </div>
                    <div className="flex overflow-auto justify-end gap-4">
                        {images.map((image, i) => (
                            <button className="cursor-pointer" onClick={() => setActiveImageIndex(i)} key={i}>
                                <img className="h-[52px] w-auto" src={image} alt="" />
                            </button>
                        ))}
                    </div>
                    <div
                        style={{ gridTemplateColumns: `repeat(${images.length + 1}, 14px)` }}
                        className="w-fit grid gap-2 mx-auto"
                    >
                        {images.map((_, i) => (
                            <div
                                key={i}
                                className={`${activeImageIndex === i ? "bg-base col-span-2" : "bg-[#B3B3B3]"} h-0.75`}
                            ></div>
                        ))}
                    </div>
                </div>
                {/* Image carousel */}

                {/* Product desciption */}
                <div className="bg-gradient-to-b from-white to-[#DAE2FF] py-8 px-1 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                        <div className="space-y-1 col-span-9">
                            <h2 className="text-xl">Bluetooth Earbuds – High Quality Sound</h2>
                            <p className="text-sm text-[#000000BF]">
                                Experience crystal-clear sound with our Wireless Bluetooth Earbuds. Designed with
                                advanced noise-cancellation technology, these earbuds deliver superior audio quality
                                whether you're listening to music, taking calls, or working out.
                            </p>
                            <Info heading="Brand" value="Software" />
                            <Info heading="Size" value="none" />
                            <Info heading="Color" value={3} />
                        </div>

                        <div className="col-span-2 flex flex-col justify-between space-y-3">
                            {/* Price */}
                            <div className="relative before:absolute before:w-full before:h-full before:bg-gradient-to-b before:from-[#4B70F5] before:to-[#2C418F00] before:rounded-lg before:-rotate-6 before:z-0 before:opacity-20">
                                <p className="line-through text-[#77777A] text-xs relative">₦47,000.00</p>
                                <p className="text-[22.77px] relative">₦38,637.22</p>
                            </div>
                            {/* Price */}

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
                                <GoLocation /> Lagos, Ikeja, 27 mins ago.
                            </span>
                            <span>|</span>
                            <span className="inline-flex items-center gap-2">
                                <GoEye /> 117 views
                            </span>
                        </div>
                        <div className="flex gap-6">
                            <span className="text-base">(120 Reviews)</span>
                            <span>300 units</span>
                            <span className="flex items-center gap-2">
                                <b className="text-black">4.8</b>
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
                {/* Product desciption */}
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
            {/* Customer feedback */}

            <div className="space-y-3">
                <h2 className="text-base text-[13.34px] font-medium">
                    You want to resell this product and make profit?
                </h2>
                <p className="font-light">
                    To start reselling this product, simply click the button below to generate your unique reseller
                    link. This personalized link will track all your sales for this specific product. 💰 Commission
                    Details:You will earn a reseller commission of ₦10,000 every time someone purchases this product
                    using your unique link. Take Action Now!Click the button below and start earning today!
                </p>
                <div>
                    <h3 className="text-lg">💰Commission Details:</h3>
                    <p className="font-light">
                        You will earn a reseller commission of ₦10,000 every time someone purchases this product using
                        your unique link.
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

// TODO: Modify the props as necessary.
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
