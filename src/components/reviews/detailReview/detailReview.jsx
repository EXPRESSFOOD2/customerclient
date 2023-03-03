/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./detailReview.module.css";

export default function DetailCart({ id }) {
  const [rating, setRating] = useState(0);
  const [coment, setComent] = useState("");

  const handleClick = (value) => {
    setRating(value);
    console.log(rating);
  };
  function sendReview() {
    if (!rating || !coment)
      return alert(
        "Debes seleccionar una estrella para evaluar y escribir un comentario. Gracias"
      );

    alert(
      JSON.stringify({
        id,
        rating,
        coment,
      })
    );
    /*
    Enviar : rating, tittle,comment,ordersMenuId,MenuItemId
    */
  }
  function handleComent(event) {
    const value = event.target.value;
    setComent(value);
  }
  return (
    <div className={style.totalDiv}>
      <div>
      
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            id={value}
            key={value}
            className={`${style.star} ${value <= rating ? style.selected : ""}`}
            onClick={() => handleClick(value)}
          >
            ★
          </span>
        ))}
      </div>
      <label for="comentarios">Comentarios:</label>
      <textarea
        id="comentarios"
        name="comentarios"
        rows="4"
        cols="50"
        placeholder="Escribe un comentario"
        onChange={handleComent}
      ></textarea>
      <button onClick={sendReview}>Envia tu calificacion</button>
    </div>
  );
}
