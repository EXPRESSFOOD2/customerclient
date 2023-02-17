import React from "react";
import style from "./navbar.module.css";
import logo from "../img/logo.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getFullMenu } from "../../../redux/actions/index"

export default function Navbar() {
/* Siempre que está el Navbar se carga el State */
  const dispatch = useDispatch();                               // Dispachador de Redux
  useEffect(() => { dispatch(getFullMenu()) },[dispatch])     // Precarga los elementos a mostrar
  useEffect (() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  })

  return (
    <div className={style.container}>
      <img src={logo} className={style.logo} alt="" />
      <div className={style.linkContainer}>
        <NavLink to="/store"><p>Products</p></NavLink>
        <p>Nosotros</p>
        <p>Trabaja con nosotros</p>
      </div>
    </div>
  );
}
