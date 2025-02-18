import guyvideocall from "../../../assets/Young african man having video call on laptop at home 1.png";
import uplooking from "../../../assets/Rectangle 39338.png";
import { RiGogglesLine, RiTeamLine } from "react-icons/ri";
import { LuDot } from "react-icons/lu";

const SectionHeader = ({ title }: { title: string }) => (
    <p className="text-3xl bg-gradient-to-l from-[#2C418F] to-base text-transparent bg-clip-text">{title}</p>
);

import { ReactNode } from "react";

const GradientBox = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
    <div
        className={`w-[60%] h-[70%] bg-[#EEF0FF] rounded-3xl flex justify-center gap-14 items-center max-md:w-full px-2 ${className}`}
    >
        {children}
    </div>
);

const Aboutus = () => {
    return (
        <div className="hero w-full h-auto">
            {/* Header */}
            <div className="w-full h-[20vh] flex justify-center gap-2 items-center flex-col">
                <SectionHeader title="About Us - HoverTask" />
                <p className="font-light text-xl">Introduction</p>
            </div>

            {/* Introduction Section */}
            <div className="w-full h-[50vh] flex justify-center items-center max-md:h-[70vh]">
                <div className="w-[80%] h-[60%] max-md:h-[90%] bg-[#e9edfe] flex justify-center items-center text-center rounded-4xl px-8 transform rotate-[-2deg]">
                    <p className="text-xl font-light max-md:text-lg">
                        Welcome to Hovertask, your trusted platform for earning and advertising! At Hovertask, we
                        connect businesses with individuals who are ready to perform simple social media tasks,
                        advertise products, and help brands grow. Our mission is to create opportunities for people to
                        earn daily income while helping businesses reach a wider audience.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="w-full h-[70vh] flex justify-center gap-14 max-md:gap-0 items-center max-md:flex-col max-md:h-[90vh]">
                <div className="w-[30%] h-[60%] flex justify-center items-center max-md:w-[80%]">
                    <img src={guyvideocall} alt="Video Call" className="w-full h-auto" loading="lazy" />
                </div>
                <div className="w-[32%] h-[47%] flex flex-col justify-center gap-3 px-3 max-md:w-[80%] max-md:h-[60%]">
                    <p className="bg-gradient-to-r from-base to-[#2C418F] text-transparent bg-clip-text text-7xl font-light max-md:text-6xl">
                        Our Mission
                    </p>
                    <p className="font-light">
                        To empower individuals by providing them with easy, flexible ways to earn and to support
                        businesses in achieving their marketing goals through innovative solutions.
                    </p>
                </div>
            </div>

            {/* Vision & Team Section */}
            <div className="w-full flex justify-around flex-col items-center h-[70vh] px-12 max-md:h-[90vh] max-md:px-0">
                <div className="w-full h-[40%] px-3">
                    <div className="w-[60%] py-2 flex justify-start items-center max-md:w-full max-md:justify-center">
                        <SectionHeader title="Our Vision" />
                    </div>

                    <GradientBox>
                        <RiGogglesLine size={100} className="text-base max-md:size-[150px]" />
                        <p className="text-light">
                            To become the leading platform for micro-jobs, advertising, and product reselling in the
                            digital space, empowering millions of users globally.
                        </p>
                    </GradientBox>
                </div>
                <div className="w-full h-[40%] flex justify-start items-end flex-col px-2">
                    <div className="w-[60%] py-2 flex justify-start items-center max-md:w-full max-md:justify-center">
                        <SectionHeader title="Our Team" />
                    </div>

                    <GradientBox>
                        <RiTeamLine size={100} className="text-base max-md:size-[150px]" />
                        <p className="text-light">
                            Hovertask is powered by a team of dedicated professionals who are passionate about creating
                            opportunities for individuals and businesses.
                        </p>
                    </GradientBox>
                </div>
            </div>
            <div>
                <CoreValues />
            </div>
        </div>
    );
};

export default Aboutus;

const CoreValues = () => {
    return (
        <div className="w-full flex flex-col bg-white items-center justify-center py-16 px-14 max-md:px-1">
            {/* Section Header */}

            {/* Main Content */}
            <div className="w-full flex items-center justify-center  gap-5 mt-10 max-md:flex-col">
                {/* Left Side - Image */}
                <div className="w-[40%] max-md:w-[90%]">
                    <div className="w-[60%] max-md:w-full max-md:justify-center bg-gradient-to-l from-[#DAE2FF]/10 to-[#DAE2FF] h-[7rem] flex justify-center items-center rounded-3xl transform rotate-[-2deg] ">
                        <p className="text-4xl font-light bg-gradient-to-l from-[#2C418F] to-base text-transparent bg-clip-text">
                            Our Core <span className="text-black">Values</span>
                        </p>
                    </div>
                    <img src={uplooking} alt="Core Values" className="rounded-xl" />
                </div>

                {/* Right Side - Values List */}
                <div className="w-[50%] flex flex-col gap-4 max-md:w-full">
                    <p className="text-lg flex items-center gap-2  max-md:text-center">
                        <LuDot className="text-base" size={22} />
                        <span className="font-bold text-base ">Transparency:</span> We ensure honesty and clarity in all
                        transactions.
                    </p>
                    <p className="text-lg flex items-center gap-2 max-md:text-center">
                        <LuDot className="text-base" size={22} />
                        <span className="font-bold text-base">Innovation:</span> We continuously improve to serve you
                        better.
                    </p>
                    <p className="text-lg flex items-center gap-2 max-md:text-center">
                        <LuDot className="text-base" size={22} />
                        <span className="font-bold text-base">Empowerment:</span> We aim to uplift individuals and
                        businesses alike.
                    </p>
                    <p className="text-lg flex items-center gap-2 max-md:text-center">
                        <LuDot className="text-base" size={22} />
                        <span className="font-bold text-base">Community:</span> We are building a network where everyone
                        can thrive together.
                    </p>
                    {/* Buttons */}
                    <div className="mt-8 flex gap-4">
                        <button className="px-6 py-2 bg-base text-white rounded-lg shadow-md hover:bg-[#2C418F] transition">
                            Create Account
                        </button>
                        <button className="px-6 py-2 border border-base text-base rounded-lg shadow-md hover:bg-base hover:text-white transition">
                            Login your Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
