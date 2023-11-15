import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import ChefService from "./ChefService";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";
import TryRequest from "./TryRequest";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <TryRequest></TryRequest>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;