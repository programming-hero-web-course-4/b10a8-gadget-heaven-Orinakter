import { useEffect } from "react";
import { useState } from "react";
import Gadget from "../Gadget/Gadget";


const Gadgets = () => {
    const [allGadgets,setGadgets] = useState([])
    useEffect(()=>{
        fetch('./gadgetsData.json')
        .then(res=>res.json())
        .then(data=>setGadgets(data))
    },[])
    return (
        <div className="">
            <h2 className="text-4xl font-bold text-center mt-60">Explore Cutting-Edge Gadgets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allGadgets.map(item=><Gadget item={item} key={item.product_id}></Gadget>)
                    
                }
                </div> 
        </div>
    );
};

export default Gadgets;