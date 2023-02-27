import React, { useState } from "react";
import style from "./cards.module.css";
import Card from "../card/Card";
import { useSelector } from "react-redux";

export default function CardsContainer() {
  // const totalRedux = useSelector((state) => state.cartTotal);
  let order = localStorage.getItem("order") || "[]";
  order = JSON.parse(order);
  const [cart, setCart] = useState(order);
  const menus = useSelector((state) => state.fullMenu);
  function deleteItem(id) {
    setCart(cart.filter((item) => item.id != id));
  }
  function handleChange(aux) {
    setCart(aux);
  }

  return (
    <div className={style.container}>
      <div className={style.title}>{`Carrito (${cart.length})`}</div>
      <div className={style.titleCol}> </div>
      {menus.length
        ? cart.map((item, i) => {
            return (
              <Card
                handleChange={handleChange}
                deleteItem={deleteItem}
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
