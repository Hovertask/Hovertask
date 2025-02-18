import logo from "../assets/BRAND LOGO Landing page.svg";
import filter from "../assets/filter.svg";
import avatar from "../assets/avatar.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { BiSolidDownArrow } from "react-icons/bi";
import flag from "../assets/flag.svg";
import { navList } from "../../../lib/data";
import { Link } from "react-router-dom";
import { TbMenu2 } from "react-icons/tb";
import { GrSearch } from "react-icons/gr";

type DashboardHeaderProps = {
    activeNav: string;
    setActiveNav: (nav: string) => void;
    openDropdown: boolean;
    setOpenDropdown: (openDropdown: boolean) => void;
};
const DashboardHeader: React.FC<DashboardHeaderProps> = ({
    activeNav,
    setActiveNav,
    openDropdown,
    setOpenDropdown
}) => {
    return (
        <div className="w-full bg-gradient-to-r py-6 lg:px-24 px-4 from-blue-50 to-purple-100 shadow-md">
            <div className=" flex justify-between items-center  ">
                {/* Logo */}
                <div>
                    <img src={logo} alt="Hover Task Logo" className="w-24" />
                </div>
                <div className="flex gap-5 items-center">
                    <div className="relative">
                        <div className="w-[7px] h-[7px] border rounded-full absolute right-[3.8px] bg-blue-50 top-2"></div>
                        <IoMdNotificationsOutline size={24} />
                    </div>
                    <IoMoonOutline size={20} />
                    <div className="flex gap-3">
                        <div className="flex bg-white p-2 cursor-pointer rounded-[10px] justify-center items-center gap-2 w-[65px]">
                            <IoCartOutline size={16} />
                            <span>Cart</span>
                        </div>
                        <div className="flex bg-white p-2 cursor-pointer rounded-[10px] justify-center items-center gap-3 w-[70px]">
                            <img src={flag} alt="Nigerian flag" className="w-5" />
                            <span>NGN</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between pt-10 flex-col">
                <div className="flex items-center gap-3 ">
                    <img src={avatar} alt="Avatar" width={48} />
                    <div className="text-[14px] space-y-1">
                        <p>Alayande Nurudeen</p>
                        <p className="flex items-center gap-6">
                            @Datalite
                            <BiSolidDownArrow size={12} />
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:hidden gap-6">
                    <nav className=" shadow-lg rounded-full p-4 mt-4 border-b border-gray-400 flex justify-center gap-4 items-center">
                        <div className=" flex gap-1 items-center ">
                            {navList.slice(0, 4).map((nav, index) => (
                                <div className="flex flex-col" key={index}>
                                    <Link
                                        to={nav.link}
                                        key={index}
                                        onClick={() => setActiveNav(nav.label)}
                                        className={`${
                                            activeNav === nav.label ? "bg-base text-white " : "text-black"
                                        } flex items-center gap-1  rounded-[12px] p-3 `}
                                    >
                                        {nav.icon ? nav.icon : <img src={nav.imgSrc} alt={nav.label} />}
                                        <span>{nav.label}</span>
                                        {nav.label === "Market place" && (
                                            <BiSolidDownArrow
                                                size={12}
                                                onClick={() => {
                                                    setOpenDropdown(!openDropdown);
                                                }}
                                            />
                                        )}
                                    </Link>
                                    {openDropdown &&
                                        nav.options?.map((option, index) => (
                                            <Link
                                                to={option.link}
                                                key={index}
                                                onClick={() => setActiveNav(nav.label)}
                                                className={`${
                                                    activeNav === option.label ? "bg-base text-white " : "text-black"
                                                } flex items-center gap-4  rounded-[12px] p-4 `}
                                            >
                                                {option.icon}
                                                <span>{option.label}</span>
                                                <BiSolidDownArrow size={12} />
                                            </Link>
                                        ))}
                                </div>
                            ))}
                        </div>
                        <TbMenu2 size={20} className="cursor-pointer" />
                    </nav>
                    <div className="bg-white rounded-full w-[60%] py-3 px-4  flex justify-between items-center">
                        <input type="text" className="outline-none w-[80%]" placeholder="Search any product/services" />
                        <div className="flex items-center gap-4">
                            <GrSearch className="text-gray-400 cursor-pointer" />
                            <img src={filter} alt="Filter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;
