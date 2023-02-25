/* eslint-disable react/prop-types */
import React from "react";

// import style from "./ButtonFilter.module.css";
// import { useDispatch } from "react-redux";
// import { filterMenu } from "../..//redux/actions/index";

const Button = (props) => {

  return (
    <button
      className={props.style}
      disabled={props.disabled}
      onClick={(e) => {
        
        //dispatch(filterMenu(e.target.value));
        if(!props.state.includes(e.target.value))  props.setState([...props.state, e.target.value])
        else {
          const info = props.state?.filter(tag => tag !== e.target.value)
          props.setState([...info])
        }
     
      }}
      value={props.name}
    >
      {props.name}{" "}
    </button>
  );
};

export default Button;
