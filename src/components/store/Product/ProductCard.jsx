import React from "react";
import style from "./ProductCard.module.css";


const ProductCard = ({ menuItem }) => {
  const { name, price, url_image } = menuItem;

  const handleCart = () => {
    localStorage.setItem(name,JSON.stringify({...menuItem}))
  }

  return (
    <div className={style.card}>
      {" "}
  
        <img src={url_image} alt={name + "image"} className={style.image} />
     
      <h2 className={style.title}>{name}</h2>
      <span className={style.price}>${price}</span> 
      <button className={style.toCart} onClick={handleCart}>Agregar al carrito</button>
    </div>
  );
};
export default ProductCard;
