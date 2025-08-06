import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catagory from './pages/Catagory';
import MealDetail from './pages/MealDetail';
import Random from './pages/Random';
import Header from './components/Header';
import SearchedResult from './pages/SearchedResult';
import Footer from './components/Footer';
import About from './pages/About';


function App() {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<SearchedResult />} />
        <Route path="/catagory" element={<Catagory />} />
        <Route path="/catagory/:name" element={<Catagory />} />
        <Route path="/meal/:id" element={<MealDetail />} />
        <Route path="/random" element={<Random />} />
                <Route path="/about" element={<About />} />

      </Routes>
      <Footer/>
    </>
  );
}

export default App;
