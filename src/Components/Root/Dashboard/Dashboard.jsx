import React, { useEffect, useState } from 'react';
import { getCartToLS, removeEachCardItem } from '../../../LocalStorage/localstorage';
import { RxCrossCircled } from "react-icons/rx";
import { getWishToLS, removeEachWishItem } from '../../../LocalStorage/localstoragewish';
import { BiSort } from "react-icons/bi";

const Dashboard = () => {
  const [cartData,setCartData] =useState([]);
  const [wishData,setWishData] =useState([]);
  const [cartPrice,setCartPrice] =useState(0);
  const [buttontype,setButtonType] =useState("cart")
  useEffect(()=>{
    const lsCartData = getCartToLS();
    setCartData(lsCartData);
    const totalPrice = lsCartData.reduce((x,y)=>x+y.price,0)
    setCartPrice(totalPrice)



  },[])

  
  useEffect(()=>{
    const lsWishData = getWishToLS();
    setWishData(lsWishData)

  },[])

  const cartRemoveBtnControl = (cart)=>{
    removeEachCardItem(cart)
   const reminingCartData = cartData.filter(item=>item.product_id !== cart.product_id)
   setCartData(reminingCartData);

   const totalPrice = reminingCartData.reduce((x,y)=>x+y.price,0)
    setCartPrice(totalPrice)

  }




  const wishRemoveBtnControl = (wish)=>{
    removeEachWishItem(wish)
   const reminingWishData = wishData.filter(item=>item.product_id !== wish.product_id)
   setWishData(reminingWishData)

  }

  const cartSortBtnControl = ()=>{
    const sortedCartData = [...cartData].sort((x,y)=>y.price-x.price)
    setCartData(sortedCartData)

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
        <button onClick={()=>setButtonType("cart")} className={`btn  font-bold ${buttontype=== "cart"? "bg-white text-black":"bg-purple-300"} rounded-full w-[170px] h-[50px]`}>Cart</button>
        <button onClick={()=>setButtonType("wish")} className={`btn  ${buttontype=== "wish"? "bg-white text-black":"bg-purple-300"} border-white w-[170px] h-[50px] rounded-full `}>Wishlist</button>
      </div>
    </div>
  </div>
</div>

<div className="p-10 flex justify-between ">
  <div className="">
    <h1>Cart</h1>
  </div>
  <div className="flex justify-center items-center gap-4">
    <h1>Total Cost: {cartPrice}</h1>
    <button onClick={cartSortBtnControl} className='btn '>Sort by Price<span><BiSort /></span></button>
    <button className='btn bg-purple-600 text-white'>Purchase</button>
  </div>
</div>

{
  buttontype === "cart" ? <div className="flex flex-col gap-5  p-4 ">
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
: 
<div className="flex flex-col gap-5  p-4 ">
  {
    wishData.map(cart=>(
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
          <p onClick={()=>wishRemoveBtnControl(cart)} className='text-3xl text-red-500 '><RxCrossCircled /></p>
        </div>

      </div>

    ))
  }
  
</div>
}
        </div>


    );
};

export default Dashboard;