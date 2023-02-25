/* eslint-disable react/prop-types */
import React from "react";

import style from "./card.module.css";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useDispatch, useSelector } from "react-redux";
import { changeCartTotal, changeCartCount } from "../../../redux/actions";

export default function Card({ data, menu, id, deleteItem, handleChange }) {
  const totalRedux = useSelector((state) => state.cartTotal);
  let count = data.quantity;
  // const [count, setCount] = useState(data.quantity);
  console.log(count);
  const dispatch = useDispatch();
  const totalPrice = menu.price * count;

  //meter productos en un estado

  // let totalOrder = localStorage.getItem("totalOrder") || 0;
  // totalOrder = JSON.parse(totalOrder);

  const handleChangeCount = (op) => {
    const data = localStorage.getItem("order");
    let aux = JSON.parse(data);

    if (op === "-") {
      if (aux[id].quantity === 1) {
        aux = aux.filter((i) => i.id != menu.id);
        localStorage.setItem("order", JSON.stringify(aux));
        deleteItem(menu.id);
      } else {
        aux[id].quantity -= 1;
        count = aux[id].quantity;
      }
      localStorage.setItem("totalOrder", totalRedux - menu.price);
    } else {
      aux[id].quantity += 1;
      count = aux[id].quantity;
      localStorage.setItem("totalOrder", totalRedux + menu.price);
    }
    handleChange(aux);
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
          <span onClick={() => handleChangeCount("-")}>-</span>
          <span style={{ color: "black" }}>{count}</span>
          <span onClick={() => handleChangeCount("+")}>+</span>
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
