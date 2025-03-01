import { products } from "./Market";
import ProductsSection from "./ProductsSection";

const TrendingProductsAndServices = () => {
    return <ProductsSection heading="Trending Products & Services" products={products} link="trending" />;
};

export default TrendingProductsAndServices;
