import React, { useState } from "react";
import style from "./navbar.module.css";
import logo from "./logo.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import {
  getFullMenu,
  getFullIngredients,
  changeCartCount,
  deleteAfterPayment
  
} from "../../redux/actions/index";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar() {
    /* Siempre que está el Navbar se carga el State */
    const location = useLocation().pathname.split("/").at(1);
    const dispatch = useDispatch(); // Dispachador de Redux
    const [isOpen, setIsOpen] = useState(false);

    const queryParams = new URLSearchParams(window.location.search);
    const user = queryParams.get("user");
    const fullMenu = useSelector((state) => state.fullMenu);
    const cartCount = useSelector((state) => state.cartCount);
    const localCartCount = JSON.parse(window.localStorage.getItem("cartCount")) || 0;
    const [width, setWidth] = useState(screen.width);

    window.addEventListener("resize", () => setWidth(screen.width));

    if (user && !localStorage.getItem("user")) {
        localStorage.setItem("user", user);
    }

    const { photo, userName } = JSON.parse(localStorage.getItem("user")) || {};

    useEffect(() => {
        if (!fullMenu.length) {
            dispatch(getFullMenu());
        }
        dispatch(getFullIngredients());
    }, [dispatch, fullMenu]); // Precarga los elementos a mostrar
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
    useEffect(() => {
        if (localCartCount) dispatch(changeCartCount(localCartCount));
    }, []);

    function handleLogout() {
        localStorage.removeItem("user");
        dispatch(deleteAfterPayment());
    }

    return (
        <div className={isOpen ? style.container : style.containerClose}>
            <div className={style.logo}>
                <NavLink to="/">
                    <img src={logo} className={style.logo} alt="" />
                </NavLink>
            </div>
            <div className={style.userContainer}>
                {photo && <img src={photo} alt="" />}
                {userName && <span>{userName}</span>}
            </div>
            <div className={style.linkContainer} hidden={width < 600 && !isOpen}>
                {!(width < 600 && !isOpen) && (
                    <NavLink to="/store" hidden={width < 600 && !isOpen}>
                        <p className={location === "store" ? style.current : ""}>Tienda</p>
                    </NavLink>
                )}
                {!(width < 600 && !isOpen) && (
                    <NavLink to="/">
                        <p className={location === "" ? style.current : ""}>Home</p>
                    </NavLink>
                )}
                {userName && !(width < 600 && !isOpen) && (
                    <NavLink to="/pedidos" hidden={width < 600 && !isOpen}>
                        <p className={location === "pedidos" ? style.current : ""}>
                            Mis Pedidos
                        </p>
                    </NavLink>
                )}
                {!userName && !(width < 600 && !isOpen) && (
                    <NavLink to="/login">
                        <p className={location === "login" ? style.current : ""}>Login</p>
                    </NavLink>
                )}
                {userName && !(width < 600 && !isOpen) && (
                    <NavLink
                        to="/"
                        onClick={() => handleLogout()}
                        hidden={width < 600 && !isOpen}>
                        <p className={location === "login" ? style.current : ""}>Salir</p>
                    </NavLink>
                )}
                {/* {!userName && (
          <NavLink to={"/register"}>
            <p className={location === "register" ? style.current : ""}>
              Registarte
            </p>
          </NavLink>
        )} */}

                <NavLink to={"/cart"} className={style.center} hidden={width < 600 && !isOpen}>
                    {!(width < 600 && !isOpen) && (
                        <ShoppingCartIcon sx={{ fontSize: "25px" }} />
                    )}
                    <div className={style.cartCount} hidden={width < 600 && !isOpen}>
                        {cartCount}{" "}
                    </div>
                </NavLink>
                <div
                    className={isOpen ? style.burgerOpen : style.burgerClose}
                    onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}
