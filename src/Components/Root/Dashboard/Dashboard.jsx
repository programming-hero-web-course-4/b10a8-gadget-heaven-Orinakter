import React, { useEffect, useState } from 'react';
import { getCartToLS, removeCartItemLS, removeEachCardItem, setcartItem } from '../../../LocalStorage/localstorage';
import { RxCrossCircled } from "react-icons/rx";
import { getWishToLS, removeEachWishItem } from '../../../LocalStorage/localstoragewish';
import { BiSort } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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

  const modalCloseBtnController = ()=>{

    setCartPrice(0)
    setCartData([])
    removeCartItemLS()

    


  }

    return (


        <div className="">

          <Helmet>
          <meta charSet="utf-8" />
            <title>Dashboard</title>

          </Helmet>

          

<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <div className="">
      <div className="flex flex-col justify-center items-center">
        <img src="https://i.ibb.co.com/fCG17Dk/Group.png" alt="" className='mb-5' />
        <h3 className='font-bold text-2xl'>Payment Successfully</h3>

        <hr />

        <p className='text-xl text-gray-500 mt-2' >Thanks for purchasing.</p>
        <p className='text-lg text-gray-500 mt-2'>Total:{cartPrice}</p>

      </div>
    </div>
    <div className="modal-action">
      <form method="dialog">
      
        <Link to ="/"><button onClick={modalCloseBtnController} className="btn w-full">Close</button></Link>
      </form>
    </div>
  </div>
</dialog>




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
   {
    buttontype === "cart" ?  <h1 className='text-2xl font-bold'>Cart</h1> : 
    <h1 className='text-2xl font-bold'>Wish-List</h1>
   }
  </div>
  <div className="flex justify-center items-center gap-4">
    <h1 className='text-2xl font-bold'>Total Cost: ${cartPrice}</h1>
    <button onClick={cartSortBtnControl} className='btn text-purple-600 font-bold border-purple-600 rounded-full  '>Sort by Price<span><BiSort /></span></button>
    <button 
    onClick={()=>document.getElementById('my_modal_5').showModal()}
    disabled = {cartPrice === 0}
     className='btn bg-purple-600 text-white rounded-full w-[120px] '>Purchase</button>
  </div>
</div>

{
  buttontype === "cart" ? <div className="flex flex-col gap-5  p-4 ">
  {
    cartData.map(cart=>(
      <div key={cart.product_id} className="border-2 p-4 bg-gray-100 rounded-xl flex
      gap-12 relative">
        <div className="">
          <img src={cart.product_image} alt="" className='w-48 h-32 rounded-xl' />

        </div>
        <div className="">
          <h1 className='text-2xl font-bold '>{cart.product_title}</h1>
          <p className='text-xl mt-2 text-gray-500'>{cart.description}</p>
          <p className='mt-2 font-semibold'>Price: $ {cart.price}</p>

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