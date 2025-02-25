import SideNav from "../dashboard/components/SideNav";
import Categories from "./components/Categories";
import Market from "./components/Market";

const Marketplace = () => {
    return (
        <div className="hero flex justify-center gap-6">
            <SideNav />
            <Market />
            <Categories />
        </div>
    );
};

export default Marketplace;
