

const Gadget = ({item}) => {
    const {product_image,product_title,price} =item;
    return (
        <div className="border-2 rounded-xl p-5 mx-auto mt-12 bg-gray-100">
            <img src={product_image} alt="" className="w-[285px] h-[180px] rounded-xl"/>
            <h1 className="font-bold text-2xl mt-4">{product_title}</h1>
            <p className="text-xl mt-2">Price: {price}</p>
            <button className="btn text-purple-600 rounded-full border-purple-600 font-bold mt-4 w-[155px]">View Details</button>
        </div>
    );
};

export default Gadget;