import { useEffect } from "react";
import { useState } from "react";
import Gadget from "../Gadget/Gadget";


const Gadgets = ({allProduct}) => {
    
    return (
        <div className="w-9/12">
            <h2 className="text-4xl font-bold text-center mt-60">Explore Cutting-Edge Gadgets</h2>
            {
                allProduct.length>0? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allProduct.map(item=><Gadget item={item} key={item.product_id}></Gadget>)
                    
                }
                </div> : 
                <div className="p-10 ">
                    
                    <img src="https://i.ibb.co.com/yRBKngd/images.png" alt="" className="mx-auto mt-4 rounded-xl"/>
                </div>
            }
        </div>
    );
};

export default Gadgets;