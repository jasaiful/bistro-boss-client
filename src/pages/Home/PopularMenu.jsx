import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../../components/MenuItem";
import useMenu from "../../hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])

    return (
        <section className="my-12">
            <SectionTitle
                subHeading={'Popular Items'}
                heading={'from our menu'}
            > </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    >
                    </MenuItem>)
                }
            </div>
            <div className="text-center my-5">
                <button className="btn text-white btn-outline border-0 mt-4 border-b-4 normal-case">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;