import React from "react";
import aboutImg from "./../assets/heropage.jpg"; // replace with your image
import sauceImg from "./../assets/logo.jpg"; // replace with your image

function About() {
  return (
    <div className="min-h-screen bg-[#FFF9F2] text-gray-900">
      {/* Header */}
      <div className="bg-[#FFA500] text-white py-16 text-center relative">
        <h1 className="text-4xl font-bold">About <span className="text-[#FFFF00] font-extrabold drop-shadow-md">Foodie Finder</span></h1>
        <p className="mt-4 text-lg">We Serve Delicious Food & Recipes For Everyone!</p>
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-white rounded-t-full"></div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-16">
        {/* Image Section */}
        <div className="relative flex-1 flex justify-center">
          <img src={aboutImg} alt="Delicious food" className="w-80 rounded-full shadow-lg border-8 border-white" />
          <img src={sauceImg} alt="Sauce" className="w-24 absolute -left-8 bottom-0 rotate-[-10deg]" />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 text-[#FFA500]">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Foodie Finder is your go-to platform for exploring delicious meals from around the globe. 
            We aim to make discovering recipes, restaurants, and food experiences easy and fun. 
            Whether you're a home chef or a foodie adventurer, Foodie Finder connects you to flavors you’ll love.
          </p>
          <button className="px-6 py-3 bg-[#FFA500] text-white font-semibold rounded-full hover:bg-[#FF8C00] transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#FFA500] mb-10">Why Choose Foodie Finder?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#FFF9F2] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl text-[#FFA500]">Quality Food</h3>
              <p className="text-gray-600 mt-2">We provide top-notch recipes with carefully selected ingredients to make your meals unforgettable.</p>
            </div>
            <div className="p-6 bg-[#FFF9F2] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl text-[#FFA500]">Super Taste</h3>
              <p className="text-gray-600 mt-2">Experience mouth-watering flavors and easy-to-follow recipes designed for every foodie.</p>
            </div>
            <div className="p-6 bg-[#FFF9F2] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl text-[#FFA500]">Fast & Easy</h3>
              <p className="c mt-2">Simple steps to prepare meals quickly without compromising on taste and quality.</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default About;
