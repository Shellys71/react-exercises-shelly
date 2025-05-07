import React, { useState, forwardRef, useImperativeHandle } from "react";

const InputsList = forwardRef((props, ref) => {
  const [inputsList, setInputsList] = useState([""]);

  const inputsChangeHandler = (event) => {
    const isThereNext = inputsList[+event.target.id + 1] !== undefined;
    const currentInput = event.target;

    if (!isThereNext) {
      setInputsList((prevInputs) => {
        return [...prevInputs, ""];
      });
    }

    setInputsList((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[+currentInput.id] = currentInput.value;
      if (currentInput.value === "") {
        newInputs.splice(+currentInput.id, 1);
      }
      return newInputs;
    });
    props.onAddInput(inputsList);
  };

  const initInputs = () => {
    setInputsList(() => {
      const initInputs = [""];
      return initInputs;
    });
  };

  useImperativeHandle(ref, () => {
    return {
      initInputs
    };
  })

  // useEffect(() => {
  //   setInputsList(() => {
  //     const initInputs = [""];
  //     return initInputs;
  //   });
  // }, [props.isIngredientsEmpty, props.isInstructionsEmpty])

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
});

export default InputsList;
