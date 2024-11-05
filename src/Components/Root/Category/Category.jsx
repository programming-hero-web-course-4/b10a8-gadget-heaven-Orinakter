import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Category = ({categoryController,categoryData}) => {
    
    const [productId,setProductId]=useState(0)

    const btnStatusHandler = (product_id)=>{
        setProductId(product_id)

    }
    return (

        <div className="">
            

        <div className='py-4  ' >
            {
                categoryData.map(item=>(
                    <button onClick={()=>{categoryController(item.category),btnStatusHandler(item.product_id)}}  className={`w-[200px] h-[50px] rounded-full my-4 ${item.product_id=== productId? "bg-purple-300": "bg-gray-200"}`}>{item.category}</button>

                ))
            }
          
            
            
        </div>

        </div>
    );
};

export default Category;