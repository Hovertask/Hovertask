import { Outlet } from "react-router-dom";
import { Toaster } from 'sonner';
import Footer from "./components/Footer";
import Header from "./components/Header";

const PublicLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <Toaster richColors />
        </>
    );
};

export default PublicLayout;
