import React from 'react';
import Catagory from './Catagory';
import Random from './Random';
import IngredientAnimation from './IngredientAnimation';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to Foodie Finder 🍽️</h1>
      
      <section className="mb-8">
        <Random />
      </section>
<section>
  <IngredientAnimation />
</section>
      <section>
        <Catagory />
      </section>
    </div>
  );
};

export default Home;
