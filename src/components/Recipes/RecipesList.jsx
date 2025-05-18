import React, { useContext } from "react";

import Recipe from "./Recipe";
import classes from "./RecipesList.module.css";
import RecipeContext from "../../store/recipe-context";

const RecipesList = () => {
  const recipeCtx = useContext(RecipeContext);

  const { recipes, deleteRecipe } = recipeCtx;

  const listRecipeDeleteHandler = id => {
    deleteRecipe(id);
  };

  return (
    <ul className={classes.recipes}>
      {recipes.map((recipe, index) => (
        <li key={index}>
          <Recipe
            recipe={recipe.recipe}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions}
            src={recipe.image}
            onDeleteRecipe={listRecipeDeleteHandler.bind(null, recipe.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default RecipesList;
