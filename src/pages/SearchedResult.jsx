// ResultsPage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MealDetail from './MealDetail';
 // Make sure this import path is correct

function SearchedResult() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMealId, setSelectedMealId] = useState(null);
  const { search } = useLocation();
  const queryParam = new URLSearchParams(search).get('query');

  useEffect(() => {
    const fetchMeals = async () => {
      if (!queryParam) return;

      setLoading(true);
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${queryParam}`
        );
        setMeals(res.data.meals || []);
      } catch (err) {
        console.error('Error fetching meals:', err);
      }
      setLoading(false);
    };

    fetchMeals();
  }, [queryParam]);

  if (selectedMealId) {
    return (
      <div className="p-10 bg-white min-h-screen">
        <button
          onClick={() => setSelectedMealId(null)}
          className="mb-6 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          ← Back to Home
        </button>
        <MealDetail mealId={selectedMealId} />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Results for: "{queryParam}"
      </h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : meals.length === 0 ? (
        <p className="text-center text-gray-500">No meals found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="border rounded-lg p-4 shadow cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedMealId(meal.idMeal)}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full rounded"
              />
              <h2 className="mt-2 font-semibold">{meal.strMeal}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchedResult;
