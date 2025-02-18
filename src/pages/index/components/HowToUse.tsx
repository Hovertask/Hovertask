import { FaPlay } from "react-icons/fa";

const HowToUseSection = () => {
    return (
        <section className="bg-white pb-32 px-4 rounded-lg flex flex-col items-center text-center max-w-screen-lg mx-auto">
            <div className="max-w-[717px] mx-auto mb-12">
                <h2 className="text-[40px] gradient-text">How Easy to Use Hovertask</h2>
                <p className="text-2xl">
                    Whether you're an Earner or an Advertiser, getting started is simple! Follow these easy steps to
                    achieve your goals.
                </p>
            </div>
            <div className="relative w-full max-w-[682px]">
                <img src="/assets/images/how.png" alt="How to Use Hovertask" className="rounded-[26.98px] w-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 text-white bg-red-500 rounded-full p-3 shadow-lg flex justify-center items-center">
                        <FaPlay />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToUseSection;
