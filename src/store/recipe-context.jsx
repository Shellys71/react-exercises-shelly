import React, { useState, useEffect } from "react";

const RecipeContext = React.createContext({
  recipes: [],
  addRecipe() {},
  deleteRecipe() {},
  editRecipe() {},
});

export const RecipeProvider = (props) => {
  const [recipesList, setRecipesList] = useState([]);

  useEffect(() => {
    const storedRecipesInformation = localStorage.getItem("allRecipes");

    if (storedRecipesInformation) {
      setRecipesList(JSON.parse(storedRecipesInformation));
    }
  }, []);

  const addRecipeHandler = (recipe) => {
    let existingRecipes = JSON.parse(localStorage.getItem("allRecipes"));

    if (existingRecipes === null) {
      existingRecipes = [];
    }

    existingRecipes.push(recipe);
    localStorage.setItem("allRecipes", JSON.stringify(existingRecipes));

    setRecipesList((prevRecipesList) => {
      return [...prevRecipesList, { ...recipe }];
    });
  };

  const editRecipeHandler = (id, newRecipeValue) => {
    const editedRecipeIndex = recipesList.findIndex(
      (recipe) => recipe.id === id
    );
    const editedRecipe = recipesList[editedRecipeIndex];

    const updatedRecipe = {
      recipe: newRecipeValue,
      ingredients: editedRecipe.ingredients,
      instructions: editedRecipe.instructions,
      image: editedRecipe.image,
    };

    setRecipesList((prevRecipesList) => {
      const updatedRecipesList = [...prevRecipesList];
      updatedRecipesList[editedRecipeIndex] = updatedRecipe;

      localStorage.setItem("allRecipes", JSON.stringify(updatedRecipesList));

      return updatedRecipesList;
    });
  };

  const deleteRecipeHandler = (id) => {
    const listWithDeletedRecipe = recipesList.filter(
      (recipe) => recipe.id !== id
    );
    setRecipesList(listWithDeletedRecipe);
    localStorage.setItem("allRecipes", JSON.stringify(listWithDeletedRecipe));
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes: recipesList,
        addRecipe: addRecipeHandler,
        deleteRecipe: deleteRecipeHandler,
        editRecipe: editRecipeHandler,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeContext;
