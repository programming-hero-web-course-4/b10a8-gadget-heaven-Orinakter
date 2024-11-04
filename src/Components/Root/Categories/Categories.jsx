import { useEffect, useState } from "react";
import Category from "../Category/Category";


const Categories = ({categoryData}) => {
    
    return (
        <div className="w-3/12 mt-80 p-12 shadow-xl">
            {
                categoryData.map(item=><Category item={item} kry={item.product_id}></Category>)
            }
            
        </div>
    );
};

export default Categories;