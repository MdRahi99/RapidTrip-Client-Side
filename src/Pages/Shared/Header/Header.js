import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserIcon } from '@heroicons/react/24/solid';
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {

  const {user,logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/services'>Services</Link></li>
        <li className='font-semibold'><Link to='/contact'>Contact</Link></li>
        {
            user?.email ? 
            <>
            <li className='font-semibold'><Link to='/reviews'>My Reviews</Link></li>
            <li className='font-semibold'><Link to='/addServices'>Add Service</Link></li>
            <li className='font-semibold'><button onClick={handleLogOut}>Logout</button></li>
            </>
            :
            <></>
        }
    </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Rapid<span className="bg-orange-300 ml-2 p-2 rounded text-xl text-slate-700 font-bold">Trip</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?.email?
          <div className="flex gap-2 items-center">
            <img className="h-8" src={user?.photoURL} alt='' />
            <p>{user.displayName}</p>
          </div>
          :
          <Link to='/login' className="btn">Login<UserIcon className="h-4 w-4 text-light ml-3"/></Link>
        }
      </div>
    </div>
  );
};

export default Header;
