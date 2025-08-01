import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import MealDetail from './MealDetail'

function Catagory() {
  const [categories, setCategories] = useState([]);
  const [meals, setMeals] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  const [selectedMealId, setSelectedMealId] = useState(null);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => setCategories(res.data.categories))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (name) {
      axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
        .then((res) => setMeals(res.data.meals))
        .catch((err) => console.log(err));
    } else {
      setMeals([]);
    }
  }, [name]);

  // If a meal is selected, render MealDetail
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
    <div className="p-10 bg-white min-h-screen">
      {!name ? (
        <>
          <h1 className="text-4xl font-bold mb-8">
            <span className="text-gray-900">We Serve </span>
            <span className="text-orange-500">Delicious Food</span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
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
        </>
      ) : (
        <>
          <button
            onClick={() => navigate('/catagory')}
            className="mb-6 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            ⬅ Back to Categories
          </button>

          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Meals in <span className="text-orange-500">{name}</span>
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                onClick={() => setSelectedMealId(meal.idMeal)}  // Set selected meal here
                className="bg-white rounded-2xl shadow-lg p-4 text-center border border-gray-100 hover:scale-105 transition transform cursor-pointer"
                title="Click for meal details"
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
        </>
      )}
    </div>
  );
}

export default Catagory;
