import React from "react";

import classes from "./Login.module.css";


const Input = (props) => {

  return (
    <div
    className={`${classes.control} ${
      props.state.isValid === false ? classes.invalid : ""
    }`}
  >
    <label htmlFor={props.label}>{props.title}</label>
    <input
      type={props.label}
      id={props.label}
      value={props.state.value}
      onChange={props.changeHandler}
      onBlur={props.blurHandler}
    />
  </div>
  )
};

export default Input
