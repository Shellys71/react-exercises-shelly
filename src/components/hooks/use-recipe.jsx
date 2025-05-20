import React, { useReducer } from "react";

const initialInputState = { value: "" };

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value };
  }
  if (action.type === "RESET") {
    return { value: "" };
  }
  return initialInputState;
};

const useRecipe = () => {
  const [inputState, dispatchInput] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueChangeHandler = (event) => {
    dispatchInput({ type: "INPUT", value: event.target.value });
  };

  const resetHandler = () => {
    dispatchInput({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueChangeHandler,
    resetHandler,
  };
};

export default useRecipe;
