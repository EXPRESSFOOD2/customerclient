import React from "react";
import style from "./foodCards.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";

export default function FoodCards() {
  return (
    <div className={style.container}>
      <div className={style.titleCol}>
        <h3>Basado en tu última visita</h3>
      </div>
      <div className={style.carousel}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={40}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>Img 1</SwiperSlide>
          <SwiperSlide>Img 1</SwiperSlide>
          <SwiperSlide>Img 1</SwiperSlide>
          <SwiperSlide>Img 1</SwiperSlide>
          <SwiperSlide>Img 1</SwiperSlide>
          <SwiperSlide>Img 1</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
