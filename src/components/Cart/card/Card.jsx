import React, { useState } from "react";
import style from "./card.module.css";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useDispatch } from "react-redux";
import { changeCartCount } from "../../../redux/actions";

export default function Card({ data, menu, id }) {
  const [count, setCount] = useState(data.quantity);
  const dispatch = useDispatch();
  const handleChangeCount = (op) => {
    const data = localStorage.getItem("order");
    const aux = JSON.parse(data);

    if (op === "-") {
      if (aux[id].quantity === 1) {
        aux.splice(id, 1);
        dispatch(changeCartCount("-"));
        document.getElementById(`card${id}`).remove();
      } else {
        aux[id].quantity -= 1;
        setCount(aux[id].quantity);
      }
    } else {
      aux[id].quantity += 1;
      setCount(aux[id].quantity);
    }

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

        {" $"}
        {menu.price + ".00"}
      </div>
      <div></div>
    </div>
  );
}
