/* eslint-disable react/prop-types */
import React from "react";
import style from "./foodCards.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import Card from "./card/Card";

export default function FoodCards({ menus }) {
  return (
    <div className={style.container}>
      <div className={style.titleCol}>
        <h3>Recomendados</h3>
      </div>
      <div className={style.carousel}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={40}
          navigation={true}
          className="mySwiper"
        >
          {menus.map((menu, i) => {
            return (
              <SwiperSlide key={i}>
                <Card
                  img={menu.url_image}
                  name={menu.name}
                  price={menu.price}
                  id={menu.id}
                  menu = {menu}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
