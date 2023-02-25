/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCartTotal } from "../../../redux/actions";
import style from "./detailCart.module.css";
import { sendPayment } from "../../../redux/actions";

export default function DetailCart() {
  const totalRedux = useSelector((state) => state.cartTotal);
  let total = window.localStorage.getItem("totalOrder");
  total = JSON.parse(total);
  const dispatch = useDispatch();
  let cart = JSON.parse( window.localStorage.getItem("order")) 

  useEffect(()=>{
    dispatch(changeCartTotal({type:"init", value: total}))
  },[])



  return (
      <div className={style.container}>
          {totalRedux > 0 ? (
              <>
                  <div className={style.totalDiv}>
                      <div className={style.title}>
                          <h3>Total pedido:</h3>
                          <span>${totalRedux}.00</span>
                      </div>
                      <button onClick={()=>sendPayment(cart)}>Finalizar la compra</button>
                  </div>
              </>
          ) : (
              <>
                  <h2>No tienes elementos en el carrito :(</h2>
              </>
          )}
      </div>
  );
}
