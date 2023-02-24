import React from "react";
import style from "./card.module.css";
import { NavLink } from "react-router-dom";

export default function Card({ img, name, price, id, menu }) {
  return (
    <div className={style.container}>
      <NavLink to={`store/menu/${id}`}>
        <img src={img} alt={name} />
      </NavLink>
      <h2>{name}</h2>
      <p>$ {price}</p>
    </div>
  );
}
