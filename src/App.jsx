import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catagory from './pages/Catagory';
import MealDetail from './pages/MealDetail';
import Random from './pages/Random';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catagory" element={<Catagory />} />
      <Route path="/catagory/:name" element={<Catagory />} />
      <Route path="/meal/:id" element={<MealDetail />} />
      <Route path="/random" element={<Random />} />
    </Routes>
  );
}

export default App;
