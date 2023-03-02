import React from "react";
import style from "./payment_success.module.css";
import { sendPayment,saveCart } from "../../redux/actions";
import { useDispatch } from "react-redux";

const PaymentFailure = () => {
  // const { msg } = useParams();
  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const code = searchParams.get("code");
  // console.log(code);

  const dispatch = useDispatch();
  let cart = JSON.parse(window.localStorage.getItem("order"));
  let user = JSON.parse(window.localStorage.getItem("user"));
  const sendCart = () => {
    dispatch(saveCart(cart));
    sendPayment({ products: cart, client_data: { email: user.email } });

    //  console.log({ products: cart, client_data: { email: user.email } })
  };

  return (
    <div>
      <div className={style.contenedor}>
        <div className={style.failure}></div>
        <h1>¡Lo sentimos!</h1>
        <p>Su transacción no se ha completado con exito.</p>
        <button onClick={sendCart}>Intente nuevamente</button>
      </div>
    </div>
  );
};

export default PaymentFailure;
