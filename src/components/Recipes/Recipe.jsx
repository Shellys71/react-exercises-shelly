import React, { useState } from "react";
import classes from "./Recipe.module.css";
import Card from "../UI/Card";
import deleteIcon from "../../assets/delete-icon.png";
import editIcon from "../../assets/edit-icon.png";

const Recipe = (props) => {
  const [editClicked, setEditClicked] = useState(false);

  const onEditHandler = () => {
    setEditClicked(!editClicked);
  };

  return (
    <Card className={classes.recipe}>
      {/* <h1>{props.recipe}</h1> */}
      <input disabled={!editClicked} value={props.recipe}/>
      <h2>Ingredients:</h2>
      {props.ingredients.map((ingredient, index) => (
        <p key={index}>{ingredient}</p>
      ))}
      <h2>Instructions:</h2>
      {props.instructions.map((instuction, index) => (
        <p key={index}>{instuction}</p>
      ))}
      <img className={classes["recipe-image"]} src={props.src} alt="recipe" />
      <img className={classes["delete-icon"]} src={deleteIcon} alt="trash" onClick={props.onDeleteRecipe}/>
      <img className={classes["edit-icon"]} src={editIcon} alt="trash" onClick={onEditHandler}/>
    </Card>
  );
};

export default Recipe;
