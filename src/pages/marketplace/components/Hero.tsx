import { BiSearch } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineTune } from "react-icons/md";

const Hero = () => (
    <div className="min-h-[348px] rounded-3xl relative overflow-hidden flex flex-col justify-end gap-8 z-0 p-8">
        <img src="/assets/images/image 3.png" alt="Hero image" className="absolute inset-0 z-0 h-full" />
        <div className="max-w-sm p-4 bg-gradient-to-r from-black to-transparent z-10 text-2xl font-extrabold text-white">
            Connect, Trade, and Earn on Hovertask Market Place.
        </div>

        <div className="w-full z-10 flex justify-end">
            <div
                style={{
                    clipPath:
                        "path('M1.65781 23.0894C-0.510545 11.2876 8.55168 0.40871 20.5509 0.40871H461.215C473.29 0.40871 482.371 11.4181 480.074 23.2728L477.6 36.0386C475.868 44.9756 468.101 51.4698 458.998 51.5915L24.2217 57.4066C14.8554 57.5319 6.76444 50.8832 5.07172 41.6702L1.65781 23.0894Z')"
                }}
                className="px-6 gap-8 bg-white shadow-lg flex items-center w-full max-w-[488px] h-[58px]"
            >
                {/* Search form */}
                <form className="p-4 h-[30px] rounded-full border border-[#00000066] flex items-center gap-2 flex-1">
                    <input type="text" className="bg-transparent min-w-0 flex-1 outline-none" />
                    <button title="Search">
                        <BiSearch />
                    </button>
                    <button className="text-base" title="Search">
                        <MdOutlineTune />
                    </button>
                </form>
                {/* Search form */}

                <div className="flex items-center text-[9.4px] font-light gap-4">
                    <div>Location:</div>
                    <button className="flex gap-1 items-center">
                        All Nigeria <FaCaretDown />
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default Hero;
