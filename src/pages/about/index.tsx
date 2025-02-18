import { RiGogglesLine, RiTeamLine } from "react-icons/ri";
import SectionHeader from "./components/SectionHeader";
import GradientBox from "./components/GradientBox";
import CoreValues from "./components/CoreValues";

const About = () => {
    return (
        <div className="hero w-full h-auto">
            <div className="w-full h-[20vh] flex justify-center gap-2 items-center flex-col">
                <SectionHeader title="About Us - HoverTask" />
                <p className="font-light text-xl">Introduction</p>
            </div>
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
            <div className="w-full h-[70vh] flex justify-center gap-14 max-md:gap-0 items-center max-md:flex-col max-md:h-[90vh]">
                <div className="w-[30%] h-[60%] flex justify-center items-center max-md:w-[80%]">
                    <img
                        src="/assets/images/Young african man having video call on laptop at home 1.png"
                        alt="Video Call"
                        className="w-full h-auto"
                        loading="lazy"
                    />
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

export default About;
