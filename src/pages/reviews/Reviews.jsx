/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-alert
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardsContainer from "../../components/reviews/cardsContainer/CardsContainer";
import CreateLogin from "../../components/Login/CreateLogin";

import style from "./Reviews.module.css";

export default function reviews() {
  const { orderId } = useParams();
  const [pedido, setPedido] = useState();

  const dataClient = localStorage.getItem("user");
  if (dataClient !== null) {
    useEffect(() => {
      const userEmail = { email: JSON.parse(dataClient).email };

      if (Object.keys(userEmail).length) {
        async function data() {
          try {
            const response = await axios.post(
              `/orders/get/${orderId}`,
              userEmail
            );
            setPedido(response.data);
          } catch (error) {
            return error.message;
          }
        }
        data();
      }
    }, []);
  }
  if (dataClient !== null) {
    if (pedido) {
      return (
        <div className={style.container}>
          <div className={style.cart}>
            <CardsContainer {...pedido} />
          </div>
        </div>
      );
    } else {
      return (
        <div className={style.container}>
          <h1>Oops no tenemos esta orden asociada a tu cuenta! ☹</h1>
        </div>
      );
    }
  } else {
    return (
      <div>
        <CreateLogin />
      </div>
    );
  }
}
