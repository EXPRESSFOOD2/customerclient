/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-alert
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardsContainer from "../../components/reviews/cardsContainer/CardsContainer";

import style from "./Reviews.module.css"

export default function reviews() {
  const { orderId } = useParams();
  const userEmail = { email: JSON.parse(localStorage.getItem("user")).email };
  const [pedido, setPedido] = useState();

  //no hace el get

  useEffect(() => {
    async function data() {
      try {
        const response = await axios.get(`/orders/get/${orderId}`, userEmail);
        setPedido(response.data);
      } catch (error) {
        return error.message;
      }
    }
    data();
  }, []);

  if (pedido) {
    return (
      <div className={style.container}>
        <div className={style.cart}>
          <CardsContainer {...pedido} />          
        </div>
      </div>
    );
  } else {
    return <h1>loading...</h1>;
  }
}
