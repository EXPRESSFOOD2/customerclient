/* eslint-disable react/prop-types */
import React from "react";
import style from "./ProductCard.module.css";

const ProductCard = ({ menuItem }) => {
  const { name, price, url_image } = menuItem;

  return (
      <div className={style.card}>
          {" "}
          <div className={style.image}>
              <img src={url_image} alt={name + "image"} />
          </div>
          <h2 className={style.title}>{name}</h2>
          <span className={style.price}>${price}</span>
      </div>
  );
};
export default ProductCard;
