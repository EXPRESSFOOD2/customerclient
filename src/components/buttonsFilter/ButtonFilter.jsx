/* eslint-disable react/prop-types */
import React from "react";
// import style from "./ButtonFilter.module.css";
import { useDispatch } from "react-redux";
import { filterMenu } from "../..//redux/actions/index";
const Button = (props) => {
  const dispatch = useDispatch();
  return (
    <button
      className={props.style}
      disabled={props.disabled}
      onClick={(e) => {
        dispatch(filterMenu(e.target.value));
        if(!props.state.includes(e.target.value))  props.setState([...props.state, e.target.value])
        else {
          props.setState(props.state.filter(ingredient => ingredient !== e.target.value))
        }
     
      }}
      value={props.name}
    >
      {props.name}{" "}
    </button>
  );
};

export default Button;
