import React from 'react';

const Dashboard = () => {
    return (
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
    );
};

export default Dashboard;