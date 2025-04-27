import Card from "../UI/Card";
import Recipe from "./Recipe";
import classes from "./RecipesList.module.css";

const RecipesList = (props) => {
  return (
    <Card>
      <ul className={classes.recipe}>
        {props.recipes.map((recipe) => (
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
