import React, { useState } from "react";

const RecipeContext = React.createContext({
  recipes: [],
  addRecipe() {},
});

export const RecipeProvider = (props) => {
  const [recipeList, setRecipeList] = useState([]);

  const addRecipeHandler = (recipe) => {
    setRecipeList((prevRecipesList) => {
      return [...prevRecipesList, { ...recipe, id: Math.random().toString() }];
    });
  };

  return (
    <RecipeContext.Provider
      value={{ recipes: recipeList, addRecipe: addRecipeHandler }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
