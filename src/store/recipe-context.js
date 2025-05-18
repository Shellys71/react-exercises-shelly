import React, { useState, useEffect } from "react";

const RecipeContext = React.createContext({
  recipes: [],
  addRecipe() {},
  deleteRecipe() {}
});

export const RecipeProvider = (props) => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const storedRecipesInformation = localStorage.getItem("allRecipes");

    if (storedRecipesInformation) {
      setRecipeList(JSON.parse(storedRecipesInformation));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("allRecipes", JSON.stringify(recipeList));
  }, [recipeList]);

  const addRecipeHandler = (recipe) => {
    setRecipeList((prevRecipesList) => {
      return [...prevRecipesList, { ...recipe, id: Math.random().toString() }];
    });
  };

  const deleteRecipeHandler = (id) => {
    const listWithDeletedRecipe = recipeList.filter((recipe) => recipe.id !== id);
    setRecipeList(listWithDeletedRecipe);
  };

  return (
    <RecipeContext.Provider
      value={{ recipes: recipeList, addRecipe: addRecipeHandler, deleteRecipe: deleteRecipeHandler }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
