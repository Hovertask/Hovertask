import { BsArrowLeft } from "react-icons/bs";
import ProductsSection from "./ProductsSection";
import { products } from "./Market";

const Trending = () => {
    return (
        <>
            <section className="flex items-center gap-4">
                <div>
                    <BsArrowLeft size={30} />
                </div>
                <div>
                    <h2 className="text-2xl">Explore Our Categories</h2>
                    <p className="text-xs text-[#000000BF]">
                        Find what you need, from gadgets to services, all in one place.
                    </p>
                </div>
            </section>
            <ProductsSection
                products={products.concat(products).concat(products).concat(products)}
                grid
                heading="Trending Products and Services"
                useResponsiveCard
            />
        </>
    );
};

export default Trending;
