import React, { useState, useContext } from 'react';
import assets from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faCartShopping, faBars, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false); 
  const {setShowSearch, getCartCount, navigate, token, setToken, user} = useContext(ShopContext);
  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({})
  };
  return (
    <div className="flex items-center justify-between py-2 font-medium gap-1">
      {/* Logo Section */}
      <Link to='/'>
        <div className="flex items-center justify-between py-2 px-0">
          <h1 className="text-3xl font-bold">
            <span style={{ color: 'orange' }}>W</span>
            <span style={{ color: 'green' }}>eaveLeaf</span>
          </h1>
          <img src={assets.SunLogo} alt="BrandLogo" className="w-10 h-auto ml-2" />
        </div>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/Collections" className="flex flex-col items-center gap-1">
          <p>COLLECTIONS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/About" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/Contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="w-5 cursor-pointer"
          aria-label="Search"
          onClick={()=>setShowSearch(true)}
        />

        {/* User Icon with Dropdown */}
        <div className="group relative">
          <FontAwesomeIcon
            icon={faUser}
            onClick={() => token ? null :navigate('/Login')}
            className="w-5 cursor-pointer"
            aria-label="User Profile"
          />
          {/* Dropdown  Menu*/}
          {token && <div className="hidden group-hover:block absolute right-0 pt-4 z-10">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={()=>navigate('/Order')} className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
          }
          
        </div>

        {/* Cart Icon */}
        <Link to="/Cart" className="relative">
          <FontAwesomeIcon icon={faCartShopping} />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}{/* Replace this with a dynamic value */}
          </p>
        </Link>

        {/* Hamburger Menu */}
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setVisible(true)}
          className="w-5 cursor-pointer sm:hidden"
        />
        {/* SideBar Menu for Small Screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
            <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
              <FontAwesomeIcon icon={faAngleLeft} 
              className='h-4 '/>
              <p>Back</p>
            </div>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/Collections'>COLLECTIONS</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/About'>ABOUT</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/Contact'>CONTACT</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
