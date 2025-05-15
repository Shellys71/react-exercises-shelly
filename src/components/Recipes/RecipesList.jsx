import React, { useContext } from "react";

import Recipe from "./Recipe";
import classes from "./RecipesList.module.css";
import RecipeContext from "../../store/recipe-context";

const RecipesList = () => {
  const recipeCtx = useContext(RecipeContext);

  const { recipes } = recipeCtx;

  return (
    <ul className={classes.recipes}>
      {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Recipe
              recipe={recipe.recipe}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
              src={recipe.image}
            />
          </li>
      ))}
    </ul>
  );
};

export default RecipesList;
