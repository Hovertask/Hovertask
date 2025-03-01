import { useLocation } from "react-router-dom";
import { products } from "./Market";
import ProductsSection from "./ProductsSection";

const HottestDeals = () => {
    const location = useLocation();

    return (
        <ProductsSection
            startComponent={<ProductsSection vertical products={products} />}
            heading="Hottest Deals"
            products={products}
            link={
                location.pathname.includes("dashboard")
                    ? "/dashboard/marketplace/hottest-deals-services"
                    : "/marketplace/hottest-deals-services"
            }
        />
    );
};

export default HottestDeals;
