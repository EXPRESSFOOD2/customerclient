import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper";
import data from "./imgCarousel.json";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";

export default function Carousel() {
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={true}
      scrollbar={{ draggable: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {data.img.map((link) => {
        return (
          <SwiperSlide>
            <img src={link} alt="noc" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
