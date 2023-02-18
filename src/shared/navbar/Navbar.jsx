import React from "react";
import style from "./navbar.module.css";
import logo from "./logo.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { getFullMenu } from "../../redux/actions/index";

export default function Navbar() {
  /* Siempre que está el Navbar se carga el State */
  const location = useLocation().pathname.split("/").at(1);
  console.log(location);
  const dispatch = useDispatch(); // Dispachador de Redux
  useEffect(() => {
    dispatch(getFullMenu());
  }, [dispatch]); // Precarga los elementos a mostrar
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <NavLink to="/">
          <img src={logo} className={style.logo} alt="" />
        </NavLink>
      </div>
      <div className={style.linkContainer}>
        <NavLink to="/store">
          <p className={location === "store" ? style.current : ""}>Tienda</p>
        </NavLink>
        <NavLink to="/login">
          <p className={location === "login" ? style.current : ""}>Login</p>
        </NavLink>
        <NavLink to={"/register"}>
          <p className={location === "register" ? style.current : ""}>
            Registarte
          </p>
        </NavLink>
      </div>
    </div>
  );
}
