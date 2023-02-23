import React from "react";
import style from "./navbar.module.css";
import logo from "./logo.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { getFullMenu, getFullIngredients } from "../../redux/actions/index";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
  /* Siempre que está el Navbar se carga el State */
  const location = useLocation().pathname.split("/").at(1);

  const queryParams = new URLSearchParams(window.location.search);
  const user = queryParams.get("user");
  const fullMenu = useSelector((state) => state.fullMenu);
  const cartCount = useSelector((state) => state.cartCount);

  if (user && !localStorage.getItem("user")) {
    localStorage.setItem("user", user);
  }

  const { photo, userName } = JSON.parse(localStorage.getItem("user")) || {};

  const dispatch = useDispatch(); // Dispachador de Redux
  useEffect(() => {
    if (!fullMenu.length) {
      dispatch(getFullMenu());
    }
    dispatch(getFullIngredients());
  }, [dispatch, fullMenu]); // Precarga los elementos a mostrar
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
      <div className={style.userContainer}>
        {photo && <img src={photo} alt="" />}
        {userName && <span>{userName}</span>}
      </div>
      <div className={style.linkContainer}>
        <NavLink to="/store">
          <p className={location === "store" ? style.current : ""}>Tienda</p>
        </NavLink>
        {!userName && (
          <NavLink to="/login">
            <p className={location === "login" ? style.current : ""}>Login</p>
          </NavLink>
        )}
        {!userName && (
          <NavLink to={"/register"}>
            <p className={location === "register" ? style.current : ""}>
              Registarte
            </p>
          </NavLink>
        )}
        {userName && (
          <NavLink to="/" onClick={() => localStorage.removeItem("user")}>
            <p className={location === "login" ? style.current : ""}>Salir</p>
          </NavLink>
        )}

        <NavLink to={"/cart"} className={style.center}>
          <ShoppingCartIcon sx={{ fontSize: "25px" }} />
          <div className={style.cartCount}>{cartCount}</div>
        </NavLink>
      </div>
    </div>
  );
}
