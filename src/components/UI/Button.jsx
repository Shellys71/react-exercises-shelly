import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button disabled={props.isImageUploaded} className={styles.button} type={props.type || "button"}>
      {props.children}
    </button>
  );
};
export default Button;
