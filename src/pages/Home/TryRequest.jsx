import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";


const TryRequest = () => {

    const [itemCard, setItemCard] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const tryThis = data.filter( itemCard => itemCard.category === "salad")
                setItemCard(tryThis)})
    }, []);

    return (
        <section>
            <SectionTitle
                subHeading={'Should try'}
                heading={'chef recommends'}
            ></SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {itemCard.map(item => (
                    <div key={item._id} className="bg-base-200 text-center shadow-md rounded-lg p-4">
                        <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.recipe}</p>
                        <button className="btn btn-secondary uppercase">add to cart</button>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default TryRequest;