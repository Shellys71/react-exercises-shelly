// import React, { useState } from "react";

// import RecipeContext from "./recipe-context";

// const RecipeProvider = (props) => {
//   const [recipeList, setRecipeList] = useState([]);

//   const addRecipeHandler = (recipe) => {
//     console.log("here");
//     setRecipeList((prevRecipesList) => {
//       return [...prevRecipesList, { ...recipe, id: Math.random().toString() }];
//     });
//   };

//   const recipeContext = {
//     recipes: recipeList,
//     addRecipe: addRecipeHandler,
//   };

//   return (
//     <RecipeContext.Provider value={recipeContext}>
//       {props.children}
//     </RecipeContext.Provider>
//   );
// };

// export default RecipeProvider;
