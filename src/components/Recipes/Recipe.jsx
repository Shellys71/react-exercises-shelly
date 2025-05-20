import React, { useState } from "react";
import classes from "./Recipe.module.css";
import Card from "../UI/Card";
import useRecipe from "../hooks/use-recipe";

import deleteIcon from "../../assets/delete-icon.png";
import editIcon from "../../assets/edit-icon.png";
import doneIcon from "../../assets/done-mark.png";
import undoIcon from "../../assets/undo-icon.png";

const Recipe = (props) => {
  const [editorClicked, setEditorClicked] = useState(false);

  const { value: enteredRecipe, valueChangeHandler: recipeChangeHandler } =
    useRecipe();

  const onEditorHandler = () => {
    setEditorClicked(!editorClicked);
  };

  const onDoneEditingHandler = () => {
    setEditorClicked(false);
    props.onSaveEditedRecipe(enteredRecipe);
  };

  return (
    <Card className={classes.recipe}>
      <input
        placeholder={props.recipe}
        value={editorClicked ? enteredRecipe : props.recipe}
        onChange={recipeChangeHandler}
        disabled={!editorClicked}
        className={
          editorClicked ? classes["edit-mood"] : classes["original-mood"]
        }
      />
      <h2>Ingredients:</h2>
      {props.ingredients.map((ingredient, index) => (
        <p key={index}>{ingredient}</p>
      ))}
      <h2>Instructions:</h2>
      {props.instructions.map((instuction, index) => (
        <p key={index}>{instuction}</p>
      ))}
      <img className={classes["recipe-image"]} src={props.src} alt="recipe" />
      {/* {editorClicked ? (
        <img className={classes["recipe-image"]} src={props.src} alt="recipe" />
      ) : (
        <input
          id="image"
          type="file"
          onChange={imageChangeHandler}
          onDrop={imageChangeHandler}
          accept="image/*"
          required
        />
      )} */}
      <img
        className={classes["delete-icon"]}
        src={deleteIcon}
        alt="trash"
        onClick={props.onDeleteRecipe}
      />
      <img
        className={classes["edit-icon"]}
        src={editorClicked ? undoIcon : editIcon}
        alt="icon"
        onClick={onEditorHandler}
      />
      {editorClicked && (
        <img
          className={classes["done-icon"]}
          src={doneIcon}
          alt="done"
          onClick={onDoneEditingHandler}
        />
      )}
    </Card>
  );
};

export default Recipe;
