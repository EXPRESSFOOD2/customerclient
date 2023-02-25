import React from "react";
import style from "./cart.module.css";
import CardsContainer from "../../components/Cart/cardsContainer/CardsContainer";
import DetailCart from "../../components/Cart/detailCart/DetailCart";
import CreateLogin from "../../components/Login/CreateLogin";
import { useLocation } from "react-router-dom";

export default function Cart() {

  const {pathname} = useLocation()

  return (
      <>
          {pathname === "/cart/login" && <CreateLogin />}
          <div className={style.container}>
              <CardsContainer />
              <DetailCart />
          </div>
      </>
  );
}
