import { useState } from "react";

const InputsList = (props) => {
  const [inputsList, setInputsList] = useState([""]);

  const inputsChangeHandler = (event) => {
    setInputsList((prevInputs) => {
      const newIngredients = [...prevInputs];
      newIngredients[+event.target.id] = event.target.value;
      if (event.target.value === "") {
        newIngredients.splice(newIngredients.length - 1, 1);
      }
      return newIngredients;
    });
    if (inputsList[+event.target.id + 1] === undefined) {
      setInputsList((prevInputs) => {
        return [...prevInputs, ""];
      });
    }

    props.onAddInput(inputsList);
  };

  return (
    <div>
      {inputsList.map((input, index) => (
        <input
          key={index}
          id={index}
          type="text"
          value={input}
          onChange={inputsChangeHandler}
          required={index === 0}
        />
      ))}
    </div>
  );
};

export default InputsList;
