import { BsArrowLeft } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import Hero from "./Hero";
import { Product } from "./ProductCard";
import ProductsSection from "./ProductsSection";
import BannersCarousel from "./BannersCarousel";
import BestDealServices from "../BestDealServices";
import TrendingProductsAndServices from "./TrendingProductsAndServices";
import TrendingWomensWear from "./TrendingWomensWear";
import HottestDeals from "./HottestDeals";

export const products: Product[] = [
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
        <>
            {/* Only show this component on the dashboard */}
            {location.pathname.includes("dashboard") && (
                <section className="flex items-center gap-4">
                    <div>
                        <BsArrowLeft size={30} />
                    </div>
                    <div>
                        <h2 className="text-2xl">Welcome to Hovertask Marketplace</h2>
                        <p className="text-xs text-[#000000BF]">
                            Your one-stop platform to buy, sell, and earn effortlessly.
                        </p>
                    </div>
                </section>
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
        </>
    );
};

const BlackFridaySales = () => {
    return (
        <section className="grid [grid-template-columns:_auto_1fr] items-center gap-6 overflow-auto no-scrollbar">
            <div className="w-[192px]">
                <img src="/assets/images/Group 1000004394.png" alt="Black friday banner" className="block w-fit" />
            </div>
            <ProductsSection products={products} />
        </section>
    );
};

export default Market;
