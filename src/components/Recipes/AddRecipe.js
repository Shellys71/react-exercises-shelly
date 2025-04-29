import { useState } from "react";

import classes from "./AddRecipe.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import InputsList from "./InputsList";

const AddRecipe = (props) => {
  const [enteredRecipe, setEnteredRecipe] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState([]);
  const [enteredInstructions, setEnteredInstructions] = useState([]);
  const [uploadedImage, setUploadedImage] = useState("");

  const addRecipeHandler = (event) => {
    event.preventDefault();
    props.onAddRecipe(
      enteredRecipe,
      enteredIngredients,
      enteredInstructions,
      uploadedImage
    );
    setEnteredRecipe("");
    setEnteredIngredients([]);
    setEnteredInstructions([]);
    setUploadedImage("");
  };

  const recipeChangeHandler = (event) => {
    setEnteredRecipe(event.target.value);
  };

  const ingredientChangeHandler = (ingredient) => {
    setEnteredIngredients(ingredient);
  };

  const instructionsChangeHandler = (instruction) => {
    setEnteredInstructions(instruction);
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
        <label>Ingredients</label>
        <InputsList onAddInput={ingredientChangeHandler} />
        <label>Instructions</label>
        <InputsList onAddInput={instructionsChangeHandler} />
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
