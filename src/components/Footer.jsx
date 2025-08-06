import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#FFF9F2] text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-2">Food Finder</h2>
          <p className="text-sm text-gray-600">
            Discover meals from around the world. Easy search, tasty results.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-600">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/catagory" className="hover:text-orange-400">Categories</Link></li>
            <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-600 ">Contact</h3>
          <p className="text-sm text-gray-600">Addis Ababa, Ethiopia</p>
          <p className="text-sm text-gray-600">Email: support@foodfinder.com</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Food Finder. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
