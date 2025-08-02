import React from 'react'
import bgImage from "../assets/heropage.jpg"

function HeroPage() {
  return (
   <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-start text-white px-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div>
        <h1 className="max-w-3xl text-4xl font-bold mb-4">Find Your Next Favorite Meal
Search by category and country to discover dishes from around</h1>
    
      </div>
    </div>


  )
}

export default HeroPage