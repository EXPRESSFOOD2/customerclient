/* eslint-disable react/prop-types */
import React, { useState } from "react";
import style from "./cards.module.css";
import axios from "axios";

export default function CardsContainer({ id, MenuItems, code, hasReview }) {
  const [rating, setRating] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(false);
  async function sendReview(item) {
    await axios.post("/review/post", {
      rating: rating[item],
      OrdersMenuId: id,
      MenuItemId: item,
    });

  }

  async function handledReview() {
    if (MenuItems.length !== Object.values(rating).length) {
      return alert("No olvides calificar todos los productos");
    }

    setButtonDisabled(true)
    try {
      for (const item in rating) {
        await sendReview(item);

      }
    } catch (error) {
 
    }

    /*
    Enviar : rating, tittle,comment,ordersMenuId,MenuItemId
    */
  }

  const handleClick = (value, menuId) => {
    const newRating = { ...rating };
    newRating[1] = value;
    setRating({ ...rating, [menuId]: value });
  };

  return (
    <div className={style.container}>
      <div className={style.title}>{`Califica tu orden # ${code}`}</div>


      <div className={style.titleCol}></div>
      <div className={style.itemsContainer}>
        {MenuItems
          ? MenuItems.map((item, i) => {
              const menuId = item.OrdersMenu.MenuItemId;
              return (
                <div key={i} className={style.item}>
                  <h4>{item.name}</h4>
                  <img className={style.img} src={item.url_image} alt="" />
                  <div>
                    {[1, 2, 3, 4, 5].map((value) => (
                      <span
                        key={value}
                        className={`${style.star} ${
                          value <= rating[menuId] ? style.selected : ""
                        }`}
                        onClick={() => handleClick(value, menuId)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div className={style.titleCol}></div>
                </div>
              );
            })
          : "loading..."}
      </div>
      <button className={style.btn} onClick={handledReview} disabled={buttonDisabled}>
        Envia tu calificacion
      </button>
    </div>
  );
}
