import React from "react";
import style from "./navbar.module.css";
import logo from "../img/logo.png";

export default function navbar() {
  return (
    <div className={style.container}>
      <img src={logo} className={style.logo} alt="" />
      <div className={style.linkContainer}>
        <p>Productos</p>
        <p>Nosotros</p>
        <p>Trabaja con nosotros</p>
      </div>
    </div>
  );
}
