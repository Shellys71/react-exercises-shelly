import Card from "../UI/Card";
import classes from "./RecipesList.module.css";

const RecipesList = (props) => {
  return (
    <Card nameClass={classes.recipes}>
      <ul>
        {props.recipes.map((recipe) => (
          <li key={recipe.id}>
            {recipe.recipe}
            Ingredients: {recipe.ingredients}
            Instructions: {recipe.instructions}
            {recipe.image}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default RecipesList;
