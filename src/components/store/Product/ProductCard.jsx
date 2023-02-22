import React from "react";
import style from "./ProductCard.module.css";

const ProductCard = ({ menuItem }) => {
  const { name, price, url_image } = menuItem;

  const handleCart = () => {
    let orderARray = localStorage.getItem("order") || [];

    orderARray = [
      new Set([...JSON.parse(orderARray), { id: menuItem.id, quantity: 1 }]),
    ];

    localStorage.setItem("order", JSON.stringify(orderARray));
  };

  return (
    <div className={style.card}>
      {" "}
      <img src={url_image} alt={name + "image"} className={style.image} />
      <h2 className={style.title}>{name}</h2>
      <span className={style.price}>${price}</span>
      <button className={style.toCart} onClick={handleCart}>
        Agregar al carrito
      </button>
    </div>
  );
};
export default ProductCard;
