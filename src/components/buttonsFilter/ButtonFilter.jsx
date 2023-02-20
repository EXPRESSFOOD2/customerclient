import React from "react";
import style from "./ButtonFilter.module.css";

const Button = (props) => {

  return (
    <button className={style.button}> {props.name}
</button>
  );
};

export default Button;
