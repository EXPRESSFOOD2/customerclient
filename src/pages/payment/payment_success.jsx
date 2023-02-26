import React from "react";
import style from "./payment_success.module.css";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
    const { code } = useParams();
    //! Despachar Vaciamiento de Carrito

  return (
    <div>
        <div className={style.contenedor}>
            <div className={style.checkmark}></div>
            <h1>¡Transacción exitosa!</h1>
            <p>Su transacción ha sido procesada correctamente.</p>
            <h4>Su codigo de pedido es:</h4>
            <h5>{code}</h5>
            <p>Gracias por su compra.</p>
        </div>
    </div>
  );
};


export default PaymentSuccess;
