import { Link } from "react-router-dom";
import { navList } from "../../../lib/data";
import { BiSolidDownArrow } from "react-icons/bi";
import phone from "../assets/phone.png";
import currency from "../assets/currency.png";

type DashboardHeaderProps = {
  activeNav: string;
  setActiveNav: (nav: string) => void;
  openDropdown: boolean;
  setOpenDropdown: (openDropdown: boolean) => void;
};
const DashboardNav: React.FC<DashboardHeaderProps> = ({
  activeNav,
  setActiveNav,
  openDropdown,
  setOpenDropdown,
}) => {
  const adds = [
    {
      imgSrc: phone,
      title: "Explore Our Marketplace",
      details:
        "Buy and sell products and services effortlessly. Connect with trusted sellers and buyers to meet your needs today!",
    },
    {
      imgSrc: currency,
      title: "Earn Big by Reselling Products",
      details: "Choose high-demand products and enjoy attractive commissions",
    },
  ];

  return (
    <div className="lg:w-[18%] ">
      <nav className="bg-[#3f5fcf] lg:block hidden rounded-[20px] pl-12 py-20   h-auto   ">
        <div className=" space-y-4  border border-[#5874d6] rounded-[20px]  p-4">
          {navList.map((nav, index) => (
            <div key={index}>
              <Link
                to={nav.link}
                key={index}
                onClick={() => setActiveNav(nav.label)}
                className={`${
                  activeNav === nav.label
                    ? "bg-white  text-[#7390f7]"
                    : "text-white"
                } flex items-center gap-4  rounded-[12px] p-4 `}
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
                    onClick={() => setActiveNav(option.label)}
                    className={`${
                      activeNav === option.label
                        ? "bg-white  text-[#7390f7]"
                        : "text-white"
                    } flex items-center gap-4 border-b border-gray-300 my-6  p-4 shadow-lg rounded-[20px] `}
                  >
                    {option.icon}
                    <span>{option.label}</span>
                  </Link>
                ))}
            </div>
          ))}
        </div>
      </nav>
      <div className=" lg:w-full hidden lg:block">
        {adds.map((add, index) => (
          <div className="relative">
            <div
              key={index}
              className="p-6 mt-5 border  border-gray-300 custom-clip rounded-[20px]"
            >
              <img src={add.imgSrc} alt="" />
              <h1 className="font-bold my-3 text-[12px]">{add.title}</h1>
              <p className="text-xs">{add.details}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardNav;
