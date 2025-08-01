import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Catagory from './pages/Catagory';
import MealDetail from './pages/MealDetail';

function App() {
  return (
    <Routes>
      <Route path="/catagory" element={<Catagory />} />
      <Route path="/catagory/:name" element={<Catagory />} />
      <Route path="/meal/:id" element={<MealDetail />} />
    </Routes>
  );
}

export default App;
