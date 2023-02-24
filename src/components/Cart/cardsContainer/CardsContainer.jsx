import React from "react";
import style from "./cards.module.css";
import Card from "../card/Card";
import { useSelector } from "react-redux";

export default function CardsContainer() {
  let cart = localStorage.getItem("order") || "[]";
  cart = JSON.parse(cart);
  const menus = useSelector((state) => state.fullMenu); 
    
  
  return (
    <div className={style.container}>
      <div className={style.title}>Cart</div>
      <div className={style.titleCol}> </div>
      {menus.length
        ? cart?.map((item,i) => {
          
            return (
              <Card
                key={i}
                id={i}
                data={item}
                menu={menus?.find((menu) => menu.id + "" === "" + item.id)}
              />
            );
          })
        : "loading..."}
    </div>
  );
}
