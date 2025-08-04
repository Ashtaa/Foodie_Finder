import React from 'react';
import pastaImage from '../assets/pasta.jpg';




const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white min-h-screen  md:px-20 py-10 flex flex-col-reverse md:flex-row items-center justify-between">
      
      <div className="absolute top-0 right-0 w-[50%] md:w-[50%] h-full z-0">

  <svg viewBox="0 0 800 800" className="w-full h-full">
    <path
      fill="#ff6600ff"
      d="M000,0 C600,100 400,600 800,900 L900,0 Z"
    />
  </svg>
</div>

      <div className="md:w-1/2 space-y-6 z-10 text-center md:text-left">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Discover <span className="text-orange-500">Delicious</span> Meals from Around the World
        </h1>
        <p className="text-gray-600 mt-4">
  Explore recipes by ingredient, cuisine, or category using Foodie Finder — your gateway to global flavors. Browse cooking instructions, related dishes, and more with a sleek, easy-to-use interface.
</p>

        <button className="mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600">
          Explore More
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 relative z-10">
        <div className="rounded-full bg-white w-[250px] md:w-[350px] h-[250px] md:h-[350px] mx-auto relative shadow-xl">
          <img
            src={pastaImage}
            alt="Delicious Food"
            className="absolute top-1/2 left-1/2 w-[150px] md:w-[250px] transform -translate-x-1/2 -translate-y-1/2 z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;


