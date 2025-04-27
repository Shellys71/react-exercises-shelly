import classes from "./Recipe.modul.css";
// import Card from "../UI/Card";

const Recipe = (props) => {
  return (
    <div className={classes.recipe}>
        <div>
          <h2>{props.recipe}</h2>
          <p>Ingredients: {props.ingredients}</p>
          <p>Instructions: {props.instructions}</p>
          <img src={props.src} alt="recipe"/>
        </div>
    </div>
  );
};

export default Recipe;
