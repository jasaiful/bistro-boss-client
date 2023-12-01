import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { VscThumbsupFilled } from "react-icons/vsc";

const Testimonials = () => {

    const [reviews, setRevies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setRevies(data))
    }, [])

    return (
        <section className="my-20">
            <SectionTitle
                subHeading="What Our Client Say"
                heading="Testimonials"
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                <div>
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >

                            <div className="my-16 mx-32 flex flex-col items-center">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <VscThumbsupFilled className="text-8xl mt-12"/>
                                <p className="py-8">{review.details}</p>
                                <h3 className="text-2xl text-orange-400">{review.name}</h3>
                            </div>

                        </SwiperSlide>)
                    }
                </div>
            </Swiper>

        </section>
    );
};

export default Testimonials;