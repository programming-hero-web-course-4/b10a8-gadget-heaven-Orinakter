import React, { useEffect, useState } from 'react';
import { getCartToLS, removeEachCardItem } from '../../../LocalStorage/localstorage';
import { RxCrossCircled } from "react-icons/rx";

const Dashboard = () => {
  const [cartData,setCartData] =useState([]);
  useEffect(()=>{
    const lsCartData = getCartToLS();
    setCartData(lsCartData);

  },[])
  

  const cartRemoveBtnControl = (cart)=>{
    removeEachCardItem(cart)
   const reminingCartData = cartData.filter(item=>item.product_id !== cart.product_id)
   setCartData(reminingCartData);

  }

    return (
        <div className="">
          <div className="hero bg-purple-600 p-12">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-white">Dashboard</h1>
      <p className="py-6 text-white">
      A gadget website dashboard should provide a user-friendly interface showcasing key metrics: sales, product stock levels, order history, and customer analytics. Real-time updates, visual charts, and easy navigation help track performance and manage inventory efficiently
      </p>
      <div className="flex justify-center items-center gap-4">
        <button className='btn text-purple-600 font-bold bg-white rounded-full w-[170px] h-[50px]'>Card</button>
        <button className='btn bg-purple-600 text-white border-white w-[170px] h-[50px] rounded-full '>Wishlist</button>
      </div>
    </div>
  </div>
</div>

<div className="flex flex-col gap-5  p-4 ">
  {
    cartData.map(cart=>(
      <div key={cart.product_id} className="border-2 p-4 bg-gray-100 rounded-xl flex
      gap-12 relative">
        <div className="">
          <img src={cart.product_image} alt="" className='w-48 h-32' />

        </div>
        <div className="">
          <h1 className='text-2xl font-bold '>{cart.product_title}</h1>
          <p className='text-xl mt-2'>{cart.description}</p>
          <p>Price: $ {cart.price}</p>

        </div>
        <div className="absolute top-0 right-0">
          <p onClick={()=>cartRemoveBtnControl(cart)} className='text-3xl text-red-500 '><RxCrossCircled /></p>
        </div>

      </div>

    ))
  }
  
</div>
        </div>


    );
};

export default Dashboard;