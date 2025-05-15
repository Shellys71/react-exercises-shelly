import React from "react";

import "./App.css";
import AddRecipe from "./components/Recipes/AddRecipe";
import RecipesList from "./components/Recipes/RecipesList";
import { RecipeProvider } from "./store/recipe-context";

function App() {
  return (
    <RecipeProvider>
      <div>
        <AddRecipe />
        <RecipesList />
      </div>
    </RecipeProvider>
  );
}

export default App;
