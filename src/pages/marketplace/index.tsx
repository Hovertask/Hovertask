import SideNav from "../dashboard/components/SideNav";
import Categories from "./components/Categories";
import Market from "./components/Market";

const Marketplace = () => {
    return (
        <div className="hero overflow-hidden lg:p-4">
            <div className="grid max-lg:grid-cols-1 gap-4 max-xl:grid-cols-[1fr_232px] xl:grid-cols-[243px_1fr_232px] max-w-screen-xl mx-auto">
                <SideNav />
                <Market />
                <Categories />
            </div>
        </div>
    );
};

export default Marketplace;
