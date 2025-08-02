// Header.jsx
import Logo from "../assets/logo.jpg";
import SearchBar from './SearchBar';
import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-4">
          <img
            src={Logo}
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </div>
        <ul className="flex gap-6 font-medium text-gray-700">
          <li className="cursor-pointer hover:text-orange-500">Home</li>
          <li className="cursor-pointer hover:text-orange-500">Meals</li>
          <li className="cursor-pointer hover:text-orange-500">About Us</li>
        </ul>
        <div className="p-6">
          <SearchBar />
        </div>
      </nav>
    </header>
  );
}

export default Header;
