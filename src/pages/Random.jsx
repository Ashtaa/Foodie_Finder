import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MealDetail from './MealDetail'; // import your detail component

function Random() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMealId, setSelectedMealId] = useState(null);

  const generate = () => {
    setLoading(true);
    axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => {
        setData(response.data.meals);
        setLoading(false);
      })
      .catch((error) => {
        console.log('error fetching data', error);
        setLoading(false);
      });
  };

  // Automatically generate a meal on first render
  useEffect(() => {
    generate();
  }, []);

  // Show meal detail if selected
  if (selectedMealId) {
    return (
      <MealDetail 
        mealId={selectedMealId} 
        onBack={() => setSelectedMealId(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">
        <span className="text-gray-900">Get a </span>
        <span className="text-orange-500">Random Meal</span>
      </h1>

      <button
        onClick={generate}
        className="px-6 py-3 mb-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium shadow-lg transition"
      >
        {loading ? 'Loading...' : 'Generate Random Meal'}
      </button>

      {data.map((item) => (
        <div
          key={item.idMeal}
          onClick={() => setSelectedMealId(item.idMeal)}
          className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md text-center border border-gray-100 cursor-pointer hover:shadow-2xl transition"
          title="Click to see details"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            {item.strMeal}
          </h2>
          <p className="text-orange-500 font-medium mb-4">
            Category: {item.strCategory}
          </p>
          <img
            src={item.strMealThumb}
            alt={item.strMeal}
            className="w-full rounded-xl mb-4"
          />
          <p className="text-gray-600">{item.strArea} Cuisine</p>
        </div>
      ))}
    </div>
  );
}

export default Random;
