import React from "react";
import style from "./loading.module.css";
import logo from "./1675954366314.png";

export default function Loading() {
  return (
    <div className={style.container}>
      <img src={logo} className={style.ball} alt="logo" />
      <div class={style.shadow}></div>
    </div>
  );
}
