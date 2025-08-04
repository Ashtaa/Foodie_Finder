import React from 'react';
import Catagory from './Catagory';
import Random from './Random';
import IngredientAnimation from './IngredientAnimation';
import Header from '../components/Header';
import Hero from './HeroPage';


const Home = () => {
  return (
  <>
      <Hero/>
      

        <Random />
      
      <section>
        <IngredientAnimation />
      </section>
      <section>
        <Catagory />
      </section>
      
    </>
  );
};

export default Home;
