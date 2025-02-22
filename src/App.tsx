import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/index";
import PublicLayout from "./layouts/Public";
import Signup from "./auth/Signup";
import SignIn from "./auth/Signin";
import Faq from "./pages/index/components/Faq";
import About from "./pages/about";
import ContactUs from "./pages/contact";
import Marketplace from "./pages/marketplace";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<PublicLayout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<ContactUs />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="faq" element={<Faq />} />
                    <Route path="marketplace" element={<Marketplace />} />
                </Route>
                {/* Public routes */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
