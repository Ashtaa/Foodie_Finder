import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import MealDetail from './MealDetail';

function Catagory() {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [showAllMeals, setShowAllMeals] = useState(false); // <-- New state
  const { name } = useParams();
  const navigate = useNavigate();
  const [selectedMealId, setSelectedMealId] = useState(null);

  // Fetch categories
  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }, []);

  // Fetch meals by category
  useEffect(() => {
    if (name) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
        .then((res) => setMeals(res.data.meals))
        .catch((err) => console.log(err));
      setShowAllMeals(false); // reset on category change
    } else {
      setMeals([]);
    }
  }, [name]);

  // Show meal detail page
  if (selectedMealId) {
    return (
      <div className="p-10 bg-white min-h-screen">
        <button
          onClick={() => setSelectedMealId(null)}
          className="mb-6 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          ⬅ Back to {name ? `Meals in ${name}` : 'Categories'}
        </button>
        <MealDetail mealId={selectedMealId} />
      </div>
    );
  }

  return (
    <div className="p-10 bg-yellow-100 min-h-screen">
      {!name ? (
        <>
          <h1 className="text-4xl text-center font-bold mb-8">
            <span className="text-gray-900">We Serve </span>
            <span className="text-orange-500">Delicious Food</span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(showAll ? categories : categories.slice(0, 4)).map((cat) => (
              <div
                key={cat.idCategory}
                onClick={() => navigate(`/catagory/${cat.strCategory}`)}
                className="cursor-pointer bg-white rounded-2xl shadow-lg hover:scale-105 transition transform p-4 text-center border border-gray-100"
              >
                <img
                  src={cat.strCategoryThumb}
                  alt={cat.strCategory}
                  className="w-full rounded-xl mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-800">{cat.strCategory}</h3>
              </div>
            ))}
          </div>

          {/* View all categories */}
          {!showAll && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition"
              >
                View All Categories
              </button>
            </div>
          )}
        </>
      ) : (
        <>
         

          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Meals in <span className="text-orange-500">{name}</span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {(showAllMeals ? meals : meals.slice(0, 4)).map((meal) => (
              <div
                key={meal.idMeal}
                onClick={() => setSelectedMealId(meal.idMeal)}
                className="bg-white rounded-2xl shadow-lg p-4 text-center border border-gray-100 hover:scale-105 transition transform cursor-pointer"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full rounded-xl mb-3"
                />
                <p className="text-lg font-medium text-gray-700">{meal.strMeal}</p>
              </div>
            ))}
          </div>

          {/* View all meals */}
          {!showAllMeals && meals.length > 4 && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAllMeals(true)}
                className="px-6 py-3 bg-orange-500 text-white font-medium rounded-full hover:bg-orange-600 transition"
              >
                View All Meals
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Catagory;
