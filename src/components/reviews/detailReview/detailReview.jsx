/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import style from "./detailReview.module.css";

export default function DetailCart(props) {
  const [rating, setRating] = useState(0);  

  return (
    <div className={style.totalDiv}>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <span
            id={value}
            key={value}
            className={`${style.star} ${value <= rating ? style.selected : ""}`}
            onClick={() => props.handleClick(value)}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
