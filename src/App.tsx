import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/index";
import PublicLayout from "./layouts/Public";
import Aboutus from "./pages/index/components/Aboutus";
import Contactus from "./pages/index/components/Contactus";
import Signup from "./auth/Signup";
import SignIn from "./auth/Signin";
import MarketPlace from "./pages/dashboard/components/MarketPlace";
import Faq from "./pages/index/components/Faq";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="contact" element={<Contactus />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="market" element={<MarketPlace />} />
          <Route path="faq" element={<Faq />} />
        </Route>
        {/* Public routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
