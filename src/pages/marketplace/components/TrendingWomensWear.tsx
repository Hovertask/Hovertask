import { useLocation } from "react-router-dom";
import { products } from "./Market";
import ProductsSection from "./ProductsSection";

const TrendingWomensWear = () => {
    const location = useLocation();

    return (
        <ProductsSection
            heading="Trending Women's Wear"
            products={products}
            link={
                location.pathname.includes("dashboard")
                    ? "/dashboard/marketplace/trending-womens-wear"
                    : "/marketplace/trending-womens-wear"
            }
        />
    );
};

export default TrendingWomensWear;
