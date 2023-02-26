import React from "react";
import style from "./payment_success.module.css";
import { useParams } from "react-router-dom";

const PaymentFailure = () => {
    const { msg } = useParams();

  return (
    <div>
        <div className={style.contenedor}>
            <div className={style.failure}></div>
            <h1>¡Lo sentimos!</h1>
            <p>Su transacción ha sido cancelada.</p>
            <h4>Intente nuevamente</h4>
            <h5>{msg}</h5>
        </div>
    </div>
  );
};


export default PaymentFailure;
