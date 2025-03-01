import { useLocation } from "react-router-dom";
import { products } from "./components/Market";
import ProductsSection from "./components/ProductsSection";

const BestDealServices = () => {
    const location = useLocation();

    return (
        <ProductsSection
            startComponent={<ProductsSection vertical products={products} />}
            heading="Best Deal Services"
            products={products}
            link={
                location.pathname.includes("dashboard")
                    ? "/dashboard/marketplace/best-deal-services"
                    : "/marketplace/best-deal-services"
            }
        />
    );
};

export default BestDealServices;
