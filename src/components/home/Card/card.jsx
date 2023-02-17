import React from "react";
import style from "./card.module.css";

const Card = ({menuItem}) => {
  const {name, price} = menuItem;
  return (
    <div className={style.contentCard}>
      <img
        src="https://tn.com.ar/resizer/rLIhhhDVS3qw8WB0Ebke_-U16uk=/1440x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/77ST57RMRJBWDNLNCKVY5AKLD4.jpg"
        alt="burguer"
        className={style.image}
      />

      <div className={style.contentInfo}>
        <div className={style.InfoLocal}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/010/252/103/non_2x/cute-cartoon-hamburger-file-free-png.png"
            alt="local"
            className={style.imageLocal}
          />
          <div className={style.info}>
            <h3>{name}</h3>
            <h5>10-40 min</h5>
          </div>
        </div>
        {/*  */}
        <div className={style.km}>
          {/* <h5>4 km away</h5> */}
          <h5>{price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
