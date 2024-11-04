import React from 'react';

const Category = ({item}) => {
    const {category} = item;
    return (
        <div className='py-4 ' >
            {/* <button className='btn text-purple-600  w-[200px] h-[50px]'>All Product</button> */}
            <button className='btn w-[200px] h-[50px] rounded-full'>{category}</button>
            
        </div>
    );
};

export default Category;