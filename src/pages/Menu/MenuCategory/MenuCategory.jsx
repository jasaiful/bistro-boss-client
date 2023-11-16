import { Link } from "react-router-dom";
import HeroCover from "../../../components/HeroCover";
import MenuItem from "../../../components/MenuItem";



const MenuCategory = ({ items, title, img }) => {


    return (
        <div className="pt-8">
            {title && <HeroCover img={img} title={title} ></HeroCover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
            <div className="text-center my-5">
                <Link to={`/order/${title}`}>
                    <button className="btn text-white btn-outline border-0 mt-4 border-b-4 normal-case">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;