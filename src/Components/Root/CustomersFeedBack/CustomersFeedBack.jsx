import React from 'react';
import { RiVerifiedBadgeFill } from "react-icons/ri";

const CustomersFeedBack = () => {
    return (
        <div className="">
            <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co.com/7KyWbm0/star.png"
            className="max-w-sm rounded-lg shadow-2xl w-full h-[400px]" />
          <div className='p-6'>
            <h1 className="text-4xl font-bold ">Customers FeedBack</h1>
            <p className="py-6">
            Fantastic experience shopping here.Great selection of laptops, phones, and accessories at competitive prices. Customer service was friendly and knowledgeable, helping me find exactly what I needed. Highly recommended for tech needs.
            </p>
            <button className="btn bg-purple-600 text-white">Get Started</button>
          </div>
        </div>
      </div>

      <div className="flex justify-between border-2 bg-base-200 p-6 rounded-xl mt-20">
        <div className="">
            <h2 className='font-bold text-2xl'>Rating</h2>
            <div className="flex gap-4 items-center mt-3">
            <div className="text-left">
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-yellow-300"/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300"defaultChecked />
</div>
    </div>
            <p>20k views</p>
        </div>
        </div>
        
        <div className="">
            <button className='btn bg-blue-400 text-white'>Write a review</button>
        </div>

        
        
      </div>

      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-3 p-6 mt-16">
      <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/NLWLQvR/Srimati.jpg"
      alt=""
      className="rounded-xl w-[400px] h-[300px]" />
  </figure>
  <div className="card-body items-center text-center">
    <div className="flex gap-4 items-center">
        <h2 className='text-2xl font-bold'>Srimati Sree</h2>
        
        <p className=''><RiVerifiedBadgeFill className='bg-white text-blue-500' /></p>
    </div>
    <div className="">
    <p>2 month ago</p>
    </div>
    <div className="text-left">
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-yellow-300"/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300"defaultChecked />
</div>
    </div>
    <div className="text-left">
        <h4 className='font-semibold mb-3'><span className='font-bold'>Model:</span> Apple Watch Series 9</h4>
        <p>The Apple Watch Series 9 is fantastic! I love the new health features, especially the blood oxygen and ECG tracking. It’s like having a personal health monitor on my wrist. Battery life could be longer, but the fast charging makes up for it. Highly recommended for Apple users</p>
    </div>
    
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/BnnY6Yp/6219898645554249291.jpg"
      alt=""
      className="rounded-xl w-[400px] h-[300px]" />
  </figure>
  <div className="card-body items-center text-center">
    <div className="flex gap-4 items-center">
        <h2 className='text-2xl font-bold'>Orin Akther</h2>
        
        <p><RiVerifiedBadgeFill className='bg-white text-blue-500' /></p>
    </div>
    <div className="">
    <p>6 month ago</p>
    </div>
    <div className="text-left">
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-yellow-300"/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300"defaultChecked />
</div>
    </div>
    <div className="text-left">
        <h4  className='font-semibold mb-3'><span className='font-bold'>Model:</span> Lenovo ThinkPad X1 Carbon</h4>
        <p>The ThinkPad X1 Carbon is a powerhouse! It’s super fast and the build quality is excellent. I love the keyboard for typing long documents. The only drawback is that it’s a bit pricey, but you definitely get what you pay for.</p>
    </div>
    
  </div>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://i.ibb.co.com/98pPnNQ/IMG-9476-1.jpg"
      alt=""
      className="rounded-xl w-[400px] h-[300px]" />
  </figure>
  <div className="card-body items-center text-center">
    <div className="flex gap-4 items-center">
        <h2 className='text-2xl font-bold'>Mim Akther</h2>
        
        <p><RiVerifiedBadgeFill className='bg-white text-blue-500' /></p>
    </div>
    <div className="">
    <p>2 month ago</p>
    </div>
    <div className="text-left">
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-yellow-300"/>
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-300"defaultChecked />
</div>
    </div>
    <div className="text-left">
        <h4  className='font-semibold mb-3'><span className='font-bold'>Model:</span>iPhone 15 Pro</h4>
        <p>The camera is phenomenal, especially in low light. I love the dynamic island feature and the smooth performance. The only downside is the price, but the quality speaks for itself.</p>
    </div>
    
  </div>
</div>
      </div>

        </div>




      



    );
};

export default CustomersFeedBack;