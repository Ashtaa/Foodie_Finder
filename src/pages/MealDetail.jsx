import React, { useEffect, useState } from "react";
import axios from "axios";
import { Play } from "lucide-react";

const MealDetail = ({ mealId }) => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    if (!mealId) return; // If no ID, don't fetch

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((response) => {
        const mealData = response.data.meals[0];

        // Combine ingredients and measurements
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          const ingredient = mealData[`strIngredient${i}`];
          const measure = mealData[`strMeasure${i}`];
          if (ingredient && ingredient.trim() !== "") {
            ingredients.push({
              name: ingredient.trim(),
              measure: measure ? measure.trim() : "",
            });
          }
        }

        setMeal({ ...mealData, ingredients });
      })
      .catch((error) => {
        console.error("Error fetching meal detail:", error);
      });
  }, [mealId]);

  if (!meal) return <div className="text-white p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#ffffff] text-black p-6 md:p-12">
      <div className="md:flex gap-12">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="rounded-lg shadow-lg w-[400px] h-[300px] object-cover"
        />

        <div className="mt-6 md:mt-0 flex-1">
          <h1 className="text-4xl font-bold mb-4">{meal.strMeal}</h1>

          <p className="mb-6 max-w-3xl">{meal.strInstructions}</p>

          <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mb-6">
            {meal.ingredients.map((item, idx) => {
              const imageUrl = `https://www.themealdb.com/images/ingredients/${encodeURIComponent(
                item.name
              )}.png`;

              return (
                <div
                  key={idx}
                  className="bg-[#ffffff] rounded-lg shadow-md p-4 text-center hover:scale-105 transition"
                >
                  <img
                    src={imageUrl}
                    alt={item.name}
                    className="w-20 h-20 mx-auto mb-2 object-contain"
                  />
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-600">{item.measure}</p>
                </div>
              );
            })}
          </div>

          {meal.strCategory && (
            <p className="mt-4">
              <strong>Category:</strong> {meal.strCategory}
            </p>
          )}

          {meal.strArea && (
            <p>
              <strong>Cuisine:</strong> {meal.strArea}
            </p>
          )}

          {meal.strTags && (
            <p>
              <strong>Tags:</strong>{" "}
              {meal.strTags.split(",").map((tag) => tag.trim()).join(", ")}
            </p>
          )}

          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 bg-orange-500 text-white py-3 px-5 rounded-full cursor-pointer"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Recipe Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
