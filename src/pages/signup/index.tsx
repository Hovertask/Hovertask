import { Link } from "react-router-dom";
import useSlider from "./hooks/useSlider";
import { useEffect, useRef, useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";
import type { FieldValues } from "react-hook-form";
import EarnsphereAccountForm from "./components/EarnsphereAccountForm";
import OtpForm from "./components/OtpForm";
import logo from "../../assets/brand-logo.svg";
import submitForm from "./utils/submitForm";
import confetti from "../../assets/confetti.gif";
import { CgClose } from "react-icons/cg";

const slides = [
    {
        image: "/assets/images/Rectangle 39322.png",
        title: "Unlock Your Earning Potential",
        description: "Discover endless opportunities to earn, advertise, and resell products."
    },
    {
        image: '/assets/images/frackels.webp"',
        title: "Boost your brand visibility",
        description: "Advertise on our marketplace or levergae social media to grow your business."
    },
    {
        image: "/assets/images/newgilr.jpeg",
        title: "Turn Product to profit ",
        description: "Access a widea way of products to resell and earn commissions."
    }
];

const Signup = () => {
    const currentSlide = useSlider(slides.length);
    const [currentForm, setCurrentForm] = useState<"personal" | "earnsphere" | "verification">("personal");
    const [aggregateForm, setAggregateForm] = useState<FieldValues>({});
    const multiStepForm = useRef<HTMLDivElement>(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(() => {
        let slideIndex: number;

        if (currentForm === "personal") slideIndex = 0;
        if (currentForm === "earnsphere") slideIndex = 1;
        if (currentForm === "verification") slideIndex = 2;

        multiStepForm.current?.scroll({ left: multiStepForm.current?.clientWidth * slideIndex!, behavior: "smooth" });
    }, [currentForm]);

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
                                    >
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
                                                <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                                                <p className="text-gray-200">{slide.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Indicators */}
                        <div className="absolute bottom-6 left-6 flex items-center gap-2 transition-transform duration-700">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        currentSlide === index
                                            ? "scale-150 bg-blue-500"
                                            : "bg-white/50 hover:bg-white/75"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Section - Form */}
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="pb-6 mb-6">
                        <img src={logo} alt="Hovertask Logo" className="h-8" />
                    </div>

                    <div className="h-0.5 bg-slate-300 mb-6">
                        <div
                            style={{
                                marginLeft:
                                    currentForm === "personal" ? 0 : currentForm === "earnsphere" ? "33.3%" : "66.6%"
                            }}
                            className="w-1/3 h-full bg-blue-600 transition-all"
                        ></div>
                    </div>

                    {/* Multi-step form */}
                    <div ref={multiStepForm} className="flex items-start w-full overflow-x-hidden">
                        <PersonalInfoForm
                            onSubmit={(form: FieldValues) => {
                                setCurrentForm("earnsphere");
                                setAggregateForm({ ...aggregateForm, ...form });
                            }}
                        />
                        <EarnsphereAccountForm
                            onSubmit={(form: FieldValues) => {
                                setCurrentForm("verification");
                                setAggregateForm({ ...aggregateForm, ...form });
                            }}
                            onBackBtnPress={() => setCurrentForm("personal")}
                        />
                        <OtpForm
                            onSubmit={async (form: FieldValues) => {
                                setCurrentForm("verification");
                                await submitForm({ ...aggregateForm, ...form, role_id: "2" }, () =>
                                    setShowSuccessModal(true)
                                );
                            }}
                            onBackBtnPress={() => setCurrentForm("earnsphere")}
                        />
                    </div>

                    {/* Success modal */}
                    {showSuccessModal && (
                        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-999 flex flex-col items-center justify-center">
                            <div className="w-full max-w-lg rounded-2xl bg-white shadow-lg p-6 flex flex-col justify-center items-center text-center relative">
                                <img src={confetti} alt="Confetti" />
                                <div>
                                    <h4 className="font-semibold text-2xl">Congratulations</h4>
                                    <p className="text-zinc-600 font-light">
                                        You have successfully created your Hovertask account
                                    </p>
                                    <a
                                        target="_blank"
                                        className="w-fit bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg block mx-auto cursor-pointer font-medium transition-colors duration-200 shadow-lg shadow-blue-600/20 mt-6"
                                        href="https://hovertask-dashboard.vercel.app/"
                                    >
                                        Continue
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}

                    <p className="text-center text-gray-600 mt-6">
                        Already have an account?{" "}
                        <Link to="/signin" className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
