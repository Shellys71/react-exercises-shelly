import React, { useContext, useRef, useState } from "react";

import classes from "./AddRecipe.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import InputsList from "./InputsList";
import RecipeContext from "../../store/recipe-context";
import useRecipe from "../hooks/use-recipe";

const AddRecipe = (props) => {
  const recipeCtx = useContext(RecipeContext);

  const ingredientsInputsRef = useRef();
  const instructionsInputsRef = useRef();

  const {
    value: enteredRecipe,
    valueChangeHandler: recipeChangeHandler,
    resetHandler: resetRecipeInput
  } = useRecipe();

  // const [enteredRecipe, setEnteredRecipe] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState([""]);
  const [enteredInstructions, setEnteredInstructions] = useState([""]);
  const [uploadedImage, setUploadedImage] = useState(null);

  const addRecipeHandler = (event) => {
    event.preventDefault();

    resetRecipeInput();
    // setEnteredRecipe("");
    setEnteredIngredients([""]);
    setEnteredInstructions([""]);

    ingredientsInputsRef.current.initInputs();
    instructionsInputsRef.current.initInputs();

    const newRecipeObject = {
      recipe: enteredRecipe,
      ingredients: enteredIngredients,
      instructions: enteredInstructions,
      image: uploadedImage,
      id: parseInt(Math.random().toString() * 1000),
    };

    recipeCtx.addRecipe(newRecipeObject);
    event.target.reset();
  };

  // const recipeChangeHandler = (event) => {
  //   setEnteredRecipe(event.target.value);
  // };

  const ingredientChangeHandler = (ingredient) => {
    setEnteredIngredients(ingredient);
  };

  const instructionsChangeHandler = (instruction) => {
    setEnteredInstructions(instruction);
  };

  const imageChangeHandler = (event) => {
    const imageFile = event.target.files[0];

    const imageReader = new FileReader();
    imageReader.readAsDataURL(imageFile);

    if (imageFile) {
      if (imageFile.type.includes("image")) {
        imageReader.onload = (event) => {
          setUploadedImage(event.target.result);
        };
      } else {
        alert("Please upload an image file");
        setUploadedImage(null);
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
        <InputsList
          onAddInput={ingredientChangeHandler}
          ref={ingredientsInputsRef}
        />
        <label>Instructions</label>
        <InputsList
          onAddInput={instructionsChangeHandler}
          ref={instructionsInputsRef}
        />
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="file"
          onChange={imageChangeHandler}
          onDrop={imageChangeHandler}
          accept="image/*"
          required
        />
        <Button isImageUploaded={uploadedImage === null} type="submit">Add Recipe</Button>
      </form>
    </Card>
  );
};

export default AddRecipe;
