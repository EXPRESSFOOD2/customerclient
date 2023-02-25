/* eslint-disable react/prop-types */
import React from "react";
import style from "./card.module.css";
import { NavLink } from "react-router-dom";

export default function Card({ img, name, price, id,  }) {
  return (
    <div className={style.container}>
      <NavLink to={`/menu/${id}`}>
        <img src={img} alt={name} />
      </NavLink>
      <h2>{name}</h2>
      <p>$ {price}</p>
    </div>
  );
}
