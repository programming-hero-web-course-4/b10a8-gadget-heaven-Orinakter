import { useEffect, useState } from "react";
import Category from "../Category/Category";


const Categories = ({categoryData,categoryController,allProductBtn}) => {
    
    return (
        <div className="w-3/12 mt-80 p-12 shadow-xl">
              <button onClick={allProductBtn} className='btn bg-purple-600 text-white font-bold  w-[200px] h-[50px] rounded-full'>All Product</button>

              <div className="">
              <Category  categoryController={categoryController} categoryData={categoryData}></Category>
            
        </div>
        </div>
        
    );
};

export default Categories;