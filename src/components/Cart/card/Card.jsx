import React, { useEffect, useState } from "react";
import style from "./card.module.css";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useDispatch, useSelector } from "react-redux";
import { changeCartTotal, changeCartCount } from "../../../redux/actions";

export default function Card({ data, menu, id }) {
  const totalRedux = useSelector((state) => state.cartTotal);
  const [count, setCount] = useState(data.quantity);
  const dispatch = useDispatch();
  const totalPrice = menu.price * count;

  let totalOrder = localStorage.getItem("totalOrder") || 0;
  totalOrder = JSON.parse(totalOrder);

  const handleChangeCount = (op) => {
    const data = localStorage.getItem("order");
    const aux = JSON.parse(data);
    

    if (op === "-") {
      //GENERA ERROR A VECES NI IDEA PORQUE!!!
      console.log(aux)
      console.log(id)
      console.log(aux[id])
      if (aux[id].quantity === 1) {
        aux.splice(id, 1);
        document.getElementById(`card${id}`).remove();
      } else {
        aux[id].quantity -= 1;
        setCount(aux[id].quantity);
      }
      localStorage.setItem("totalOrder", (totalRedux - menu.price))
    } else {      
      aux[id].quantity += 1;
      setCount(aux[id].quantity);
      localStorage.setItem("totalOrder", (totalRedux + menu.price))
    }
    dispatch(changeCartCount(op));
    dispatch(changeCartTotal({ type: op, value: menu.price }));
    localStorage.setItem("order", JSON.stringify(aux));
  };

  return (
    <div className={style.container} id={`card${id}`}>
      <div className={style.col}>
        <img src={menu.url_image} alt="" />
      </div>
      <div className={style.infoCol}>
        <h3>{menu.name}</h3>
        <h5>Etiquetas</h5>
        <p>
          {menu.Tags.map((tag, i) => {
            if (i === menu.Tags.length - 1) {
              return tag.name;
            }
            return tag.name + ", ";
          })}
        </p>
        <div></div>
        <div className={style.button}>
          Free shipping{" "}
          <LocalShippingIcon sx={{ lineHeight: "", fontSize: "15px" }} />
        </div>
      </div>
      <div className={style.buyCont}>
        <div className={style.cantCont}>
          <span onClick={(e) => handleChangeCount("-")}>-</span>
          <span style={{ color: "black" }}>{count}</span>
          <span onClick={(e) => handleChangeCount("+")}>+</span>
        </div>
        <div>
          {" $"}
          {totalPrice + ".00"}
        </div>
      </div>
      <div></div>
    </div>
  );
}
