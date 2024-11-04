import React from 'react';

const Category = ({item,categoryController}) => {
    const {category} = item;
    return (

        <div className="">
            

        <div className='py-4 ' >
          
            <button onClick={()=>categoryController(category)}  className='btn w-[200px] h-[50px] rounded-full'>{category}</button>
            
        </div>

        </div>
    );
};

export default Category;