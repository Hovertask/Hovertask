import { Link } from "react-router-dom";
import ProductCard, { Product } from "./ProductCard";

const ProductsSection = ({ heading, products }: { heading?: string; products: Product[] }) => {
    return (
        <div className="space-y-4">
            {heading && (
                <div className="flex items-center justify-between">
                    <h2>{heading}</h2>
                    <Link to="#" className="font-light text-base">
                        View All
                    </Link>
                </div>
            )}
            <div className="flex gap-4 bg-[#EBEFFF] p-4 rounded-2xl overflow-x-auto no-scrollbar max-w-full">
                {products.map((product) => (
                    <ProductCard key={product.name} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsSection;
