import React from "react";
import style from "./cart.module.css";
import CardsContainer from "../../components/Cart/cardsContainer/CardsContainer";
import DetailCart from "../../components/Cart/detailCart/DetailCart";
import CreateLogin from "../../components/Login/CreateLogin";

export default function Cart() {
  const userName = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      {!userName && <CreateLogin />}
      <div className={style.container}>
        <div className={style.cart}>
          <CardsContainer />
          <DetailCart />
        </div>
      </div>
    </div>
  );
}
