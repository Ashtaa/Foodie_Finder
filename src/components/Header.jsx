// Header.jsx
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import SearchBar from './SearchBar';

import React, { useState } from 'react';


function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative bg-white shadow z-10 overflow-hidden">

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 relative z-10">
        <div className="flex items-center gap-7">
          <img
            src={Logo}
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        </div>
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="/catagory">Categories</Link>
          </li>
          <li className="cursor-pointer hover:text-orange-500">
            <Link to="/about">About Us</Link>
          </li>
      

        </ul>
        <div className="hidden md:block">
          <SearchBar />
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-2 cursor-pointer text-white border bg-[#FFA500]  border-[#FFA500] rounded-lg">
          Sign up

        </button>
        <button className="px-4 py-2 cursor-pointer hover:text-orange-500 border border-[#FFA500] rounded-lg">
          Login

        </button>
        </div>
        


        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 font-medium">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block hover:text-orange-500">Home</Link>
          <Link to="/catagory" onClick={() => setMobileMenuOpen(false)} className="block hover:text-orange-500">Categories</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-orange-500">About Us</Link>
          <div>
            <SearchBar />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;


