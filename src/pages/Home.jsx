import React from 'react';
import Catagory from './Catagory';
import Random from './Random';
import IngredientAnimation from './IngredientAnimation';
import Header from '../components/Header';
import HeroPage from '../components/HeroPage';

const Home = () => {
  return (
    <div className="">
      <Header/>
      <HeroPage/>
      
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
