/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import style from "./cards.module.css";
import axios from "axios";
import Alert from "../../../shared/Alert/Alert";
import { useNavigate } from "react-router-dom";

export default function CardsContainer({
  id,
  MenuItems,
  code,
  hasReview,
  Review,
}) {
  const [rating, setRating] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [alertVisibleBeforeReview, setAlertVisibleBeforeReview] =
    useState(false);
  const [alertVisibleAfterReview, setAlertVisibleAfterReview] = useState(true);
  const navigate = useNavigate();

  async function sendReview(item) {
    await axios.post("/review/post", {
      rating: rating[item],
      OrdersMenuId: id,
      MenuItemId: item,
    });
  }

  async function handledReview() {
    if (MenuItems.length !== Object.values(rating).length) {
      setAlertVisibleBeforeReview(true);
    } else {
      setButtonDisabled(true);

      navigate("/store");

      try {
        for (const item in rating) {
          await sendReview(item);
        }
      } catch (error) {}
    }
    /*
    Enviar : rating, tittle,comment,ordersMenuId,MenuItemId
    */
  }

  const handleClick = (value, menuId) => {
    const newRating = { ...rating };
    newRating[1] = value;
    setRating({ ...rating, [menuId]: value });
  };
  useEffect(() => {
    let newRating = {};
    if (hasReview) {
      Review.forEach((menu) => {
        newRating[menu.MenuItemId] = menu.rating;
      });
    }
    setRating(newRating);
  }, [Review, hasReview]);

  return !hasReview ? (
    <div className={style.container}>
      <div className={style.title}>{`Califica tu orden # ${code}`}</div>

      <div className={style.titleCol}></div>
      <div className={style.itemsContainer}>
        {MenuItems?.map((item, i) => {
          const menuId = item.OrdersMenu.MenuItemId;
          return (
            <div key={item.id} className={style.item}>
              <img className={style.img} src={item.url_image} alt="" />
              <h4 className={style.itemName}>{item.name}</h4>
              <div>
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className={`${style.star} ${
                      value <= rating[menuId] ? style.selected : ""
                    }`}
                    onClick={() => handleClick(value, menuId)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <button
        className={style.toCart}
        onClick={handledReview}
        disabled={buttonDisabled}
      >
        Envia tu calificacion
      </button>
      <div className={style.divAlert}>
        {alertVisibleBeforeReview && (
          <Alert
            title="Calificacion en curso!"
            message="Por favor puntua todos los productos de tu orden"
            type="danger"
            stateAlert={alertVisibleBeforeReview}
            setStateAlert={setAlertVisibleBeforeReview}
            setStatebutton={setButtonDisabled}
          />
        )}{" "}
      </div>
    </div>
  ) : (
    <div className={style.container}>
      <div className={style.title}>{`Orden #${code}`}</div>
      <div className={style.divisionBar}></div>

      <br className={style.titleCol}></br>
      <div className={style.itemsContainer}>
        {MenuItems.map((item, i) => {
          const menuId = item.OrdersMenu.MenuItemId;
          return (
            <div key={i} className={style.item}>
              <img className={style.img} src={item.url_image} alt="" />
              <h4 className={style.itemName}>{item.name}</h4>
              <div>
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    className={`${style.star} ${
                      value <= rating[menuId] ? style.selected : ""
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.divAlert}>
        {alertVisibleAfterReview && (
          <Alert
            title="Orden con Reseña"
            message="Parece qua ya puntuaste esta orden, compra mas para seguir puntuando nuestros productos!"
            type="success"
            stateAlert={alertVisibleAfterReview}
            setStateAlert={setAlertVisibleAfterReview}
            setStatebutton={setButtonDisabled}
          />
        )}{" "}
      </div>
    </div>
  );
}
