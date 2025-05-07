import React, { useState } from "react";
import "./App.css";
import AddRecipe from "./components/Recipes/AddRecipe";
import RecipesList from "./components/Recipes/RecipesList";


function App() {
  const [recipeList, setRecipeList] = useState([]);

  const addRecipeHandler = (recipe) => {
    setRecipeList((prevRecipesList) => {
      return [...prevRecipesList, {...recipe, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddRecipe onAddRecipe={addRecipeHandler} />
      <RecipesList recipes={recipeList} />
    </div>
  );
}

export default App;
