/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCartTotal, saveCart } from "../../../redux/actions";
import style from "./detailCart.module.css";
import { sendPayment } from "../../../redux/actions";

export default function DetailCart() {
  const totalRedux = useSelector((state) => state.cartTotal);
  let total = window.localStorage.getItem("totalOrder");
  total = JSON.parse(total);
  const dispatch = useDispatch();
  let cart = JSON.parse(window.localStorage.getItem("order"));
  let user = JSON.parse(window.localStorage.getItem("user"));


  useEffect(() => {
    dispatch(changeCartTotal({ type: "init", value: total }));
  }, []);

  const sendCart = async () => {
    dispatch(saveCart(cart));
    await  sendPayment({ products: cart, client_data: { email: user.email } });
  //  console.log({ products: cart, client_data: { email: user.email } })
  };

  return (
    <div className={style.container}>
      {totalRedux > 0 ? (
        <>
          <div className={style.totalDiv}>
            <div className={style.title}>
              <h3>Total pedido:</h3>
              <span>${totalRedux}.00</span>
            </div>
            <button onClick={sendCart}>Finalizar la compra</button>
          </div>
        </>
      ) : (
        <>
          <h2>No tienes elementos en el carrito ☹</h2>
        </>
      )}
    </div>

  );
}
