/* eslint-disable react/prop-types */
import React from "react";
import style from "./loading.module.css";
import logo from "./1675954366314.png";

export default function Loading({ notfound }) {
 
  return (
    <div className={style.container}>
      <img src={logo} className={style.ball} alt="logo" />
      <div className={style.shadow}></div>
      {!!notfound && (
        <span style={{ fontSize: "25px", fontWeight: "bold" }}>Not found</span>
      )}
    </div>
  );
}
