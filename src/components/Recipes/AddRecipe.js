import { useState } from "react";

import classes from "./AddRecipe.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddRecipe = (props) => {
  const [enteredRecipe, setEnteredRecipe] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState("");
  const [enteredInstructions, setEnteredInstructions] = useState("");
  const [uploadedImage, setUploadedImage] = useState();

  const addRecipeHandler = (event) => {
    event.preventDefault();
    // console.log(enteredRecipe, enteredIngredients, enteredInstructions);
    props.onAddRecipe(enteredRecipe, enteredIngredients, enteredInstructions, uploadedImage);
    setEnteredRecipe("");
    setEnteredIngredients("");
    setEnteredInstructions("");
    // setUploadedImage(null);
  };

  const recipeChangeHandler = (event) => {
    setEnteredRecipe(event.target.value);
  };

  const ingredientsChangeHandler = (event) => {
    setEnteredIngredients(event.target.value);
  };

  const instructionsChangeHandler = (event) => {
    setEnteredInstructions(event.target.value);
  };

  const imageChangeHandler = (event) => {
    setUploadedImage(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addRecipeHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredRecipe}
          onChange={recipeChangeHandler}
        />
        <label htmlFor="ingredients">Ingredients</label>
        <input
          id="ingredients"
          type="text"
          value={enteredIngredients}
          onChange={ingredientsChangeHandler}
        />
        <label htmlFor="instructions">Instructions</label>
        <input
          id="instructions"
          type="text"
          value={enteredInstructions}
          onChange={instructionsChangeHandler}
        />
        <label htmlFor="image">Image</label>
        <input id="image" type="file" value={uploadedImage} onChange={imageChangeHandler}/>
        <Button type="submit">Add Recipe</Button>
      </form>
    </Card>
  );
};

export default AddRecipe;
