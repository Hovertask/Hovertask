import { BiStar } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import storeIcon from "../../../assets/store-button.svg";
import arrow from "../../../assets/arrow.svg";

export interface Product {
    name: string;
    price: number;
    discount: number;
    reviews_count: number;
    rating: number;
    available_units: number;
    featured_image_url: string;
}

const ProductCard = (props: Product) => {
    return (
        <div className="min-w-[180px] w-[180px] bg-white rounded-2xl p-4 space-y-2">
            <div className="bg-zinc-200 rounded-2xl overflow-hidden">
                <img className="h-[97.7px]" src={props.featured_image_url} alt={props.name} />
            </div>
            <div>
                <div className="flex justify-between">
                    <h3 className="text-[11.28px] capitalize">{props.name}</h3>
                    <button className="text-[#FF00FB]">
                        <FaHeart />
                    </button>
                </div>
                <div className="flex gap-6">
                    <p className="text-[9.4px] text-[#77777A] line-through">{props.price}</p>
                    <p className="text-[11.28px]">{props.price * (props.discount / 100)}</p>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="text-[9.4px] flex items-center">
                        <BiStar /> {props.rating}
                    </p>
                    <p className="text-[9.4px] text-base">({props.reviews_count} Reviews)</p>
                    <p className="text-[#77777A] text-[9.11px]">{props.available_units} Units</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <button className="flex gap-1 justify-center items-center bg-base text-white rounded-full h-[27.75px] w-[106px] text-[9.64px]">
                    <img src={storeIcon} alt="store icon" />
                    Buy Product
                </button>
                <Link
                    to="#"
                    className="flex items-center justify-center rounded-full h-[28.92px] w-[28.92px] border border-base"
                >
                    <img src={arrow} alt="Arrow north east" />
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
