import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import thisguy from "../assets/Rectangle 39322.png";
import frackels from "../assets/frackels.webp";
import thisgirl from "../assets/newgilr.jpeg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const Input = ({ label, id, ...props }: InputProps) => (
  <div className="space-y-1">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={id}
      {...props}
      className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-gray-50"
    />
  </div>
);

const Signup = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: thisguy,
      title: "Unlock Your Earning Potential",
      description:
        "Discover endless opportunities to earn, advertise, and resell products.",
    },
    {
      image: frackels,
      title: "Boost your brand visibility",
      description:
        "Advertise on our marketplace or levergae social media to grow your business.",
    },
    {
      image: thisgirl,
      title: "Turn Product to profit ",
      description:
        "Access a widea way of products to resell and earn commissions.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Left Section - Carousel */}
        <div className="w-full md:w-1/2">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            {/* Images Container */}
            <div
              className="absolute w-full h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="absolute w-full h-full flex">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="min-w-full h-full relative transform hover:rotate-0 transition-transform duration-300 overflow-hidden"
                    style={{
                      transform:
                        currentSlide === index
                          ? "rotate(-2deg)"
                          : "rotate(0deg)",
                    }}
                  >
                    {/* <div className="relative h-[500px] rounded-2xl overflow-hidden transform hover:rotate-0 transition-transform duration-300 rotate-[-2deg]" */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                      <div
                        className="absolute bottom-16 p-6 text-white transition-opacity duration-500"
                        style={{ opacity: currentSlide === index ? 1 : 0 }}
                      >
                        <h2 className="text-2xl font-bold mb-2">
                          {slide.title}
                        </h2>
                        <p className="text-gray-200">{slide.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {/* <div className="absolute top-1/2 -translate-y-1/2 w-full px-4 flex justify-between">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div> */}

            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 transition-transform duration-700">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? "w-6 bg-blue-500"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="pb-6 mb-6 border-b border-gray-200">
            <img
              src="/api/placeholder/120/32"
              alt="Hovertask Logo"
              className="h-8"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Create a Hovertask Account
            </h2>
            <p className="text-gray-600 mt-2">
              Join our community and start earning today
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Input label="First Name" id="firstName" type="text" />
              <Input label="Last Name" id="lastName" type="text" />
            </div>

            <Input label="Email Address" id="email" type="email" />

            <div className="grid grid-cols-2 gap-4">
              <Input
                label="Referrer's Username"
                id="referrer"
                type="text"
                placeholder="Optional"
              />
              <Input label="Username" id="username" type="text" />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="accountType"
                className="block text-sm font-medium text-gray-700"
              >
                Select How You Want to Use Hovertask
              </label>
              <select
                id="accountType"
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none bg-gray-50"
              >
                <option value="">Select How You Want to Use Hovertask</option>
                <option value="earn">Earn Money</option>
                <option value="advertise">Advertise Products</option>
                <option value="resell">Resell Products</option>
              </select>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
              </div>
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  General Terms of Use
                </a>{" "}
                &{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg shadow-blue-600/20">
              Create Account
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
