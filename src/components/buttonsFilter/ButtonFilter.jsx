import React from "react";
import style from "./ButtonFilter.module.css";

const Button = (props) => {

  return (
    <button
      className={props.style}
      disabled={props.disabled}
      onClick={(e) => {
        
        //dispatch(filterMenu(e.target.value));
        if(!props.state.includes(e.target.value))  props.setState([...props.state, e.target.value])
        else {
          props.setState([...props.state?.filter(tag => tag !== e.target.value)])
        }
     
      }}
      value={props.name}
    >
      {props.name}{" "}
    </button>
  );
};

export default Button;
