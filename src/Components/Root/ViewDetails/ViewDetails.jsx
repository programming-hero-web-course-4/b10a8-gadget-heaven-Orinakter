import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const ViewDetails = () => {
    const {product_id}= useParams();
    const viewData = useLoaderData();
    const parseNumber = parseInt(product_id);
    const viewItem = viewData.find(item => item.product_id == parseNumber)
    const {product_image,product_title,price,description,Specification,rating,warranty} = viewItem
    return (

        <div className=''>
            <div className="">
            <div className="hero bg-purple-600 p-12">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-white">Product Details</h1>
      <p className="py-6 text-white">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      
    </div>
  </div>
</div>

          </div>

            <div className="flex gap-32">
            <div className="mt-12">
            <img src={product_image} alt="" className='w-[430px] h-[500px] rounded-xl' />
            </div>
            <div className="mt-12">
                <h1 className='text-2xl font-bold'>{product_title}</h1>
                <p className='mt-3 text-lg'>Price: {price}</p>
                <button className='btn text-green-500 rounded-full bg-green-100 mt-3 border-green-600 font-bold'>In Stock</button>
                <p className='mt-3 '>{description}</p>
                <div className="mt-3">
                <span className='text-xl font-bold '>Specification:</span>
                <ul className='list-decimal ml-4 mt-3'>
                {
                        Specification.map((Specification,id)=>(
                            <li key={id}>{Specification}</li>

                        ))
                    }
                            
                            </ul>
                    
                </div>
                <p className='mt-3 text-xl font-bold'>Rating:</p>
                <p className='mt-3'>{rating}</p>
                <div className=" flex gap-10">
                <div className="rating mt-4">
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" defaultChecked />
                  <input type="radio" name="rating-4" className="mask mask-star-2 bg-yellow-300" />
                     </div>
                     <div className="">
                        <button className='btn rounded-full w-[50px] h-[30px] p-3 '>{rating}</button>
                     </div>
                     
                </div>
                <p className='text-xl font-bold mt-3'>warranty: {warranty}</p>

                <div className="flex gap-6 items-center mt-4">
                    <div className="">
                    <button className='btn bg-purple-700 text-white rounded-full w-[190px]'>Add To Card <p><CiShoppingCart className='text-2xl' /></p></button>
                    </div>
                    <div className="">
                        <button className='btn rounded-full bg-white'><CiHeart className='text-2xl' /></button>

                    </div>
                </div>

            </div>
            </div>
           
        </div>
    );
};

export default ViewDetails;