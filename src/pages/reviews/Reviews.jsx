/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-alert
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardsContainer from "../../components/reviews/cardsContainer/CardsContainer";
import CreateLogin from "../../components/Login/CreateLogin";

import style from "./Reviews.module.css";
const mipedido = JSON.parse({"id":22,"total":36,"client_data":{"email":"gibsonavilan@gmail.com"},"code":"A021","status":"Entregada","payment_data":{"code":"22","collection_id":"1313123075","collection_status":"approved","payment_id":"1313123075","status":"approved","external_reference":"null","payment_type":"credit_card","merchant_order_id":"8099873339","preference_id":"463377658-f65a6b95-3718-4278-a1cc-eb483bab8e4e","site_id":"MLA","processing_mode":"aggregator","merchant_account_id":"null"},"createdAt":"2023-03-09T04:38:30.666Z","updatedAt":"2023-03-09T04:39:37.599Z","deletedAt":null,"store_id":"f3bc0474-620c-429d-a46c-df2460c7725a","MenuItems":[{"name":"Canasto Floral Aniversario","url_image":"https://res.cloudinary.com/group7foodexpress/image/upload/v1678150203/gxlimir3mkwvxxsjns1t.jpg","OrdersMenu":{"id":85,"quantity":1,"unitPrice":36,"OrderId":22,"MenuItemId":2}}]})
export default function reviews() {
  const { orderId } = useParams();
  const [pedido, setPedido] = useState();

  const dataClient = localStorage.getItem("user");
  if (dataClient !== null) {
    useEffect(() => {
      const userEmail = { email: JSON.parse(dataClient).email };

      if (Object.keys(userEmail).length) {
        async function data() {
          // try {
            const response = await axios.post(
              `/orders/get/${orderId}`,
              userEmail
            );
           if(Object.keys.length(response.data)) setPedido(response.data);
           
           setPedido(mipedido)
          // } catch (error) {
          //   return error.message;
          // }
        }
        data();
      }
    }, []);
  }
  if (dataClient !== null) {
    // if (pedido) {
      return (
        <div className={style.container}>
          <div className={style.cart}>
            <CardsContainer {...pedido} />
          </div>
        </div>
      );
    // } else {
    //   return (
    //     <div className={style.container}>
    //       <h1>Oops no tenemos esta orden asociada a tu cuenta! ☹</h1>
    //     </div>
    //   );
    // }
  } else {
    return (
      <div>
        <CreateLogin />
      </div>
    );
  }
}
