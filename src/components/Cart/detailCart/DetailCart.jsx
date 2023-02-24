import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCartTotal } from "../../../redux/actions";
import style from "./detailCart.module.css";

export default function DetailCart() {
  const totalRedux = useSelector((state) => state.cartTotal);
  let total = window.localStorage.getItem("totalOrder");
  total = JSON.parse(total);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(changeCartTotal({type:"init", value: total}))
  },[])

  function hanldePayment() {
    alert(window.localStorage.getItem("order") || "[]");
  }

  return (
    <div className={style.container}>
      {total > 0 ? (
        <>
          <div className={style.title}>
            {" "}
            <h2>Total pedido: ${total} </h2>
          </div>
          <button onClick={hanldePayment}>Pagar!!</button>
        </>
      ) : (
        <>
          <h2>No tienes elementos en el carrito :(</h2>
        </>
      )}
    </div>
  );
}
