import React, { useContext, useRef, useState } from "react";

import classes from "./AddRecipe.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import InputsList from "./InputsList";
import RecipeContext from "../../store/recipe-context";

const AddRecipe = (props) => {
  const ctx = useContext(RecipeContext);

  const ingredientsInputsRef = useRef();
  const instructionsInputsRef = useRef();

  const [enteredRecipe, setEnteredRecipe] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState([""]);
  const [enteredInstructions, setEnteredInstructions] = useState([""]);
  const [uploadedImage, setUploadedImage] = useState(null);

  const addRecipeHandler = (event) => {
    event.preventDefault();

    const newRecipe = {
      recipe: enteredRecipe,
      ingredients: enteredIngredients,
      instructions: enteredInstructions,
      image: uploadedImage,
    };

    setEnteredRecipe("");
    setEnteredIngredients([""]);
    setEnteredInstructions([""]);

    ingredientsInputsRef.current.initInputs();
    instructionsInputsRef.current.initInputs();

    let existingRecipes = JSON.parse(localStorage.getItem("allRecipes"));

    // const imageReader = new FileReader();

    // imageReader.readAsDataURL(uploadedImage);

    if (existingRecipes === null) {
      existingRecipes = [];
    }

    const newRecipeObject = {
      recipe: enteredRecipe,
      ingredients: enteredIngredients,
      instructions: enteredInstructions,
      image: uploadedImage,
      id: parseInt(Math.random().toString() * 1000),
    };

    existingRecipes.push(newRecipeObject);
    localStorage.setItem("allRecipes", JSON.stringify(existingRecipes));

    ctx.addRecipe(newRecipe);
    event.target.reset();
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
