import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import { navContext } from "../Root";


const NavBar = () => {
  const location = useContext(navContext);

    const navItem =<>
    <NavLink to="/"><li>Home</li></NavLink>
    <NavLink to="/statistics"><li>Statistics</li></NavLink>
    <NavLink to="/dashboard"><li>Dashboard</li></NavLink>
    <NavLink to="/customerfeedback"><li>Reviews</li></NavLink>
    </>
    return (
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItem}
      </ul>
    </div>
    <h1 className="text-2xl font-bold text-black">Gadget Heaven</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className={`menu menu-horizontal px-1 gap-6 ${location==="/" ? "text-white":"text-black"}`}>
      {navItem}
    </ul>
  </div>
  <div className="navbar-end flex gap-3">
   <button className="bg-white"><CiShoppingCart /></button>
   <button className="bg-white"><CiHeart /></button>
  </div>
</div>
    );
};

export default NavBar;