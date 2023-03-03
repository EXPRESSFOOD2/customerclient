/* eslint-disable react/prop-types */
import React from "react";
import style from "./cards.module.css";

export default function CardsContainer({  MenuItems, code }) {
  return (
    <div className={style.container}>
      <div className={style.title}>{`Califica tu pedido # ${code}`}</div>
      <div className={style.titleCol}></div>
      <div className={style.itemsContainer}>
        {MenuItems
          ? MenuItems.map((item, i) => {
              return (
                
                <div className={style.item}>
                  <h4>{item.name}</h4>
                  <img className={style.img} src={item.url_image} alt="" />
                  <div className={style.titleCol}></div>
                </div>
              );
            })
          : "loading..."}
      </div>
      
    </div>
  );
}
