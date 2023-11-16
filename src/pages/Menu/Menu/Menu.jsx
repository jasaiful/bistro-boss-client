import { Helmet } from 'react-helmet-async';
import HeroCover from '../../../components/HeroCover';
import bannerBg from '../../../assets/menu/banner3.jpg'
import dessertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';



const Menu = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <HeroCover
                img={bannerBg}
                title="our menu"
            ></HeroCover>


            {/* main cover */}

            <SectionTitle
                subHeading={"Don't Miss"}
                heading={"Today's Offer"}
            ></SectionTitle>


            {/* offered menu items */}

            <MenuCategory
                items={offered}
            ></MenuCategory>


            {/* dessert menu items */}

            <MenuCategory
                items={desserts}
                title="dessert"
                img={dessertBg}
            ></MenuCategory>


            {/* pizza menu items */}

            <MenuCategory
                items={pizza}
                title="pizza"
                img={pizzaBg}
            ></MenuCategory>


            {/* salad menu items */}

            <MenuCategory
                items={salad}
                title="salad"
                img={saladBg}
            ></MenuCategory>


            {/* soup menu items */}

            <MenuCategory
                items={soup}
                title="soup"
                img={soupBg}
            ></MenuCategory>

        </div>
    );
};

export default Menu;