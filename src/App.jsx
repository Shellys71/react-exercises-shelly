import React, { useState } from "react";

import "./App.css";
import AddRecipe from "./components/Recipes/AddRecipe";
import RecipesList from "./components/Recipes/RecipesList";
import RecipeContext from "./store/recipe-context";

function App() {
  const [recipeList, setRecipeList] = useState([]);

  const addRecipeHandler = (recipe) => {
    setRecipeList((prevRecipesList) => {
      return [...prevRecipesList, { ...recipe, id: Math.random().toString() }];
    });
  };

  return (
    <RecipeContext.Provider value={{ recipes: recipeList }}>
      <div>
        <AddRecipe onAddRecipe={addRecipeHandler} />
        <RecipesList />
      </div>
    </RecipeContext.Provider>
  );
}

export default App;
