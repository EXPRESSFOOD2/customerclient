import React from "react";
import style from "./ProductCard.module.css";

const ProductCard = ({menuItem}) => {
    const {name, price, url_image} = menuItem;
  return (
    <div className={style.container}>
      <img src={url_image} alt={name + "image"} />
    <h2>{name}</h2>
    <h3>$ {price}</h3>
    </div>
  );
};
export default ProductCard;
