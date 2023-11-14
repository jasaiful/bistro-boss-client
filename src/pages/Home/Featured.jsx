import SectionTitle from "../../components/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className="my-20 featured-item bg-fixed text-white pt-8">
            <SectionTitle
            subHeading={'Check it out'}
            heading={'Featured Item'}
            > </SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pt-12 pb-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad sint officiis amet facere placeat quibusdam dolor ab saepe natus aliquam? Esse, laborum eaque! Possimus iste at aspernatur saepe minus vel, doloribus veritatis nobis nam molestias totam nihil repellat animi quo! Aut dignissimos, temporibus odio est impedit consequatur sapiente sequi quo.</p>
                    <button className="btn text-white btn-outline border-0 mt-4 border-b-4 normal-case">Order Now</button>
                </div>
            </div>
            
        </section>
    );
};

export default Featured;