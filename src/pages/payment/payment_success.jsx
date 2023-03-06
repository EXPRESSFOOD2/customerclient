/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import style from "./payment_success.module.css";
import { useLocation, useParams} from "react-router-dom";
import { deleteAfterPayment } from "../../redux/actions";
import { useDispatch } from "react-redux";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const {code} = useParams();

  useEffect(() => {
    dispatch(deleteAfterPayment());
  }, []);

  

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
