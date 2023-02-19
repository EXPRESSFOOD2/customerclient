import React from "react";
import style from "./ProductCard.module.css";


const ProductCard = ({ menuItem }) => {
  const { name, price, url_image } = menuItem;
  return (
    <div className={style.card}>
      {" "}
  
        <img src={url_image} alt={name + "image"} className={style.image} />
     
      <h2 className={style.title}>{name}</h2>
      <span className={style.price}>${price}</span> 
    </div>
  );
};
export default ProductCard;
