import { Link } from "react-router-dom";


const BannerSection = () => {
    return (
    
        <div className="flex flex-col items-center bg-purple-600 text-white py-16 px-4 md:px-8 relative">

    <div className="relative">
    <div className="hero py-8">
  <div className="hero-content text-center">
    <div className="max-w-md mb-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold ">Upgrade Your Tech Accessorize with 
         Gadget Heaven Accessories</h1>
      <p className="py-6">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      <Link to="/dashboard"><button className="btn text-purple-600 rounded-full w-[150px] font-bold">Shop Now</button></Link>
    </div>
  </div>
</div>

{/* image */}
    <div className="absolute -bottom-60">
        <img src="https://i.ibb.co.com/nsQFgdd/banner.jpg" alt="" className="rounded-lg w-full mx-auto bg-white/50  p-4 border"/>
    </div>
    </div>
</div>
    );
};

export default BannerSection;