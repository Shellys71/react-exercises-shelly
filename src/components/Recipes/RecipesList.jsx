import React, { useContext } from "react";

import Card from "../UI/Card";
import Recipe from "./Recipe";
import classes from "./RecipesList.module.css";
import RecipeContext from "../../store/recipe-context";

const RecipesList = () => {
  const recipeCtx = useContext(RecipeContext);

  const { recipes } = recipeCtx;

  return (
    <Card>
      <ul className={classes.recipe}>
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
    </Card>
  );
};

export default RecipesList;
