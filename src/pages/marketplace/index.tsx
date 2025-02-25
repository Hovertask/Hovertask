import SideNav from "../dashboard/components/SideNav";
import Market from "./components/Market";

const Marketplace = () => {
    return (
        <div className="flex justify-center gap-6">
            <SideNav />
            <Market />
        </div>
    );
};

export default Marketplace;
