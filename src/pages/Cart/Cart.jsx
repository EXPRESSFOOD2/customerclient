import React from "react";
import style from "./cart.module.css";
import CardsContainer from "../../components/Cart/cardsContainer/CardsContainer";
import DetailCart from "../../components/Cart/detailCart/DetailCart";

export default function Cart() {
  return (
    <div className={style.container}>
      <CardsContainer />
      <DetailCart />
    </div>
  );
}
