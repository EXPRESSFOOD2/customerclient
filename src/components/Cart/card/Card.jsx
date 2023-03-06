/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useDispatch, useSelector } from "react-redux";
import { changeCartTotal, changeCartCount } from "../../../redux/actions";

export default function Card({ data, menu, id, deleteItem, handleChange }) {
  const totalRedux = useSelector((state) => state.cartTotal);
  const countRedux = useSelector((state) => state.cartCount);
  let count = data.quantity;
  // const [count, setCount] = useState(data.quantity);
  const dispatch = useDispatch();
  const totalPrice = menu.price * count;

  //meter productos en un estado

  // let totalOrder = localStorage.getItem("totalOrder") || 0;
  // totalOrder = JSON.parse(totalOrder);

  const handleChangeCount = (op) => {
    const data = localStorage.getItem("order");
    let aux = JSON.parse(data);

    if (op === "-") {
      if (count === 1) {
        alert("El monto minimo por producto es de 1")
        return;
      }
      else if (aux[id].quantity === 1) {
        aux = aux.filter((i) => i.id !== menu.id);
        localStorage.setItem("order", JSON.stringify(aux));
        deleteItem(menu.id);
      } else {
        aux[id].quantity -= 1;
        count = aux[id].quantity;
      }
      localStorage.setItem("totalOrder", totalRedux - menu.price);
    } else {
      if (count === menu.stock) return;
      aux[id].quantity += 1;
      count = aux[id].quantity;
      localStorage.setItem("totalOrder", totalRedux + menu.price);
    }
    handleChange(aux);
    dispatch(changeCartCount(op));
    dispatch(changeCartTotal({ type: op, value: menu.price }));
    localStorage.setItem("order", JSON.stringify(aux));
  };
  const hanldeDelete = () => {
    const data = localStorage.getItem("order");
    let aux = JSON.parse(data);
    aux = aux.filter((i) => i.id !== menu.id);
    localStorage.setItem("order", JSON.stringify(aux));
    localStorage.setItem("totalOrder", totalRedux - totalPrice);

    deleteItem(menu.id);
    dispatch(changeCartCount(countRedux - count));
    dispatch(changeCartTotal({ type: "init", value: totalRedux - totalPrice }));
  };
  
  return (
    <div className={style.container} id={`card${id}`}>
      <div className={style.col}>
        <img src={menu.url_image} alt="" />
      </div>
      <div className={style.infoCol}>
        <div className={style.info}>
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
        <div className={style.counter}>
          <div className={style.cantCont}>
            <span onClick={() => handleChangeCount("-")}>-</span>
            <span style={{ color: "black" }}>{count}</span>
            <span onClick={() => handleChangeCount("+")}>+</span>
            {/* <p>{`(${menu.stock} disponibles)`}</p> */}
          </div>
          <div className={style.counterSpan}>
            <Link to="/store">
              <span>Cargar más productos</span>
            </Link>
            <span onClick={hanldeDelete}>Eliminar</span>
          </div>
        </div>
      </div>
      <div className={style.buyCont}>
        <div>
          {" $"}
          {totalPrice + ".00"}
        </div>
      </div>
      <div></div>
    </div>
  );
}
