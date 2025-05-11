import React from "react";
import classes from "./Recipe.modul.css";

const Recipe = (props) => {
  return (
    <div className={classes.recipe}>
        <div>
          <h1>{props.recipe}</h1>
          <h2>Ingredients:</h2>
          {props.ingredients.map((ingredient, index) => <p key={index}>{ingredient}</p>)}
          <h2>Instructions:</h2>
          {props.instructions.map((instuction, index) => <p key={index}>{instuction}</p>)}
          <img src={props.src} alt="recipe"/>
        </div>
    </div>
  );
};

export default Recipe;
