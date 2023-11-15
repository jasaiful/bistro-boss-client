import { Helmet } from 'react-helmet-async';
import HeroCover from '../../../components/HeroCover';
import bannerBg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <HeroCover img={bannerBg} title = "our menu" ></HeroCover>
            <PopularMenu></PopularMenu>
            <HeroCover img={bannerBg} title = "our menu" ></HeroCover>
            <PopularMenu></PopularMenu>
            <HeroCover img={bannerBg} title = "our menu" ></HeroCover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;