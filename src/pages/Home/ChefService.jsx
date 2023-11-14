import bgImg from '../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div className="relative bg-fixed bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="absolute inset-24 flex justify-center items-center">
                <div className="text-center text-black mx-10 py-48 rounded-xl bg-white bg-opacity-80">
                    <h3 className="text-4xl font-bold mb-5">Bistro boss</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatum natus aut, suscipit amet officia omnis repellat id dignissimos eveniet repudiandae porro expedita, quam necessitatibus possimus voluptatibus facere assumenda. Rem.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ChefService;