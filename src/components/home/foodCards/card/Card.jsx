/* eslint-disable react/prop-types */
import React from "react";
import style from "./card.module.css";
import { Link } from "react-router-dom";

export default function Card({ img, name, price, id,  }) {
  return (
    <div className={style.container}>
      <Link to={`/menu/${id}`}>
        <img src={img} alt={name} />
      </Link>
      <h2>{name}</h2>
      <p>$ {price}</p>
    </div>
  );
}
