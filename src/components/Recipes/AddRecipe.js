import { useState } from "react";

import classes from "./AddRecipe.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddRecipe = (props) => {
  const [enteredRecipe, setEnteredRecipe] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState("");
  const [enteredInstructions, setEnteredInstructions] = useState("");
  const [uploadedImage, setUploadedImage] = useState("");
  let indexIngredientsInput = 1;

  const addRecipeHandler = (event) => {
    event.preventDefault();
    props.onAddRecipe(
      enteredRecipe,
      enteredIngredients,
      enteredInstructions,
      uploadedImage
    );
    setEnteredRecipe("");
    setEnteredIngredients("");
    setEnteredInstructions("");
    setUploadedImage("");
  };

  const recipeChangeHandler = (event) => {
    setEnteredRecipe(event.target.value);
  };

  const ingredientsChangeHandler = (event) => {
    console.log("hi");
    setEnteredIngredients(event.target.value);
    if (document.getElementById(`ingredients-${indexIngredientsInput}`) === null) {
      let next = document.createElement("input");
      next.id = `ingredients-${indexIngredientsInput}`;
      next.setAttribute("type", "text");
      next.setAttribute("value", enteredIngredients);
      next.addEventListener("change", ingredientsChangeHandler);
      document.getElementById("ingredients-container").appendChild(next);
      console.log("hwew");
    }
    indexIngredientsInput++;
  };

  const instructionsChangeHandler = (event) => {
    setEnteredInstructions(event.target.value);
  };

  const imageChangeHandler = (event) => {
    if (event.target.files[0]) {
      if (event.target.files[0].type.includes("image")) {
        setUploadedImage(URL.createObjectURL(event.target.files[0]));
      } else {
        alert("Please upload an image file");
        setUploadedImage("");
      }
    }
  };

  return (
    <Card className={classes.input}>
      <form id="form" onSubmit={addRecipeHandler}>
        <label htmlFor="recipe">Recipe</label>
        <input
          id="recipe"
          type="text"
          value={enteredRecipe}
          onChange={recipeChangeHandler}
          required
        />
        <label htmlFor="ingredients">Ingredients</label>
        <div id="ingredients-container">
          <input
            id="ingredients-0"
            type="text"
            value={enteredIngredients}
            onChange={ingredientsChangeHandler}
            required
          />
        </div>
        <label htmlFor="instructions">Instructions</label>
        <div id="instructions-container">
          <input
            id="instructions"
            type="text"
            value={enteredInstructions}
            onChange={instructionsChangeHandler}
            required
          />
        </div>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="file"
          onChange={imageChangeHandler}
          onDrop={imageChangeHandler}
          accept="image/*"
          required
        />
        <Button type="submit">Add Recipe</Button>
      </form>
    </Card>
  );
};

export default AddRecipe;
