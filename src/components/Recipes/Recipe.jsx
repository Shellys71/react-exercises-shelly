import React from "react";
import classes from "./Recipe.module.css";
import Card from "../UI/Card";
import deleteImage from "../../assets/delete-icon.png";

const Recipe = (props) => {
  return (
    <Card className={classes.recipe}>
      <h1>{props.recipe}</h1>
      <h2>Ingredients:</h2>
      {props.ingredients.map((ingredient, index) => (
        <p key={index}>{ingredient}</p>
      ))}
      <h2>Instructions:</h2>
      {props.instructions.map((instuction, index) => (
        <p key={index}>{instuction}</p>
      ))}
      <img className={classes["recipe-image"]} src={props.src} alt="recipe" />
      <img className={classes["delete-icon"]} src={deleteImage} alt="trash" onClick={props.onDeleteRecipe}/>
    </Card>
  );
};

export default Recipe;
