import { Link } from "react-router-dom";
import ProductCard, { Product } from "./ProductCard";
import { ReactNode } from "react";

const ProductsSection = ({
    heading,
    products,
    vertical,
    startComponent
}: {
    heading?: string;
    products: Product[];
    vertical?: boolean;
    startComponent?: ReactNode;
}) => {
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
            <div
                className={`${
                    vertical ? "" : "p-4"
                } flex gap-4 bg-[#EBEFFF] rounded-2xl overflow-y-hidden max-w-full h-[254px]`}
            >
                {startComponent && <div className="h-full w-fit">{startComponent}</div>}
                <div
                    className={`${
                        vertical ? "flex-col" : ""
                    } flex-1 flex gap-4 overflow-x-auto no-scrollbar max-w-full h-full`}
                >
                    {products.map((product) => (
                        <ProductCard horizontal={vertical} key={product.name} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;
