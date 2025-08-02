import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const IngredientAnimation = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((response) => {
        const fetched = response.data.meals.map((item, index) => ({
          id: index,
          name: item.strIngredient,
          image: `https://www.themealdb.com/images/ingredients/${item.strIngredient}-Small.png`,
        }));
        setIngredients(fetched);
      })
      .catch((error) => {
        console.error("Error fetching ingredients:", error);
      });
  }, []);

  return (
    <div className="relative overflow-hidden h-48 bg-gradient-to-r from-white to-gray-100 flex items-center px-6">
      <motion.div
        className="flex gap-10 min-w-max cursor-pointer"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          duration: 3600,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...ingredients, ...ingredients].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-24 cursor-pointer"
            title={`Ingredient: ${item.name}`}
            // If you want click effects but no navigation, handle here if needed:
            onClick={() => {
              // For example: show alert or do nothing
              // alert(`Clicked on ${item.name}`);
            }}
          >
            <div className="w-20 h-20 rounded-full bg-white shadow-md flex items-center justify-center mb-2 hover:scale-110 transition-transform">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 object-contain"
              />
            </div>
            <span className="text-sm font-semibold text-gray-700 text-center">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default IngredientAnimation;
