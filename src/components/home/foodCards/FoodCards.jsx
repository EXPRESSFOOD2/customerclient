/* eslint-disable react/prop-types */
import React, {  useState } from "react";
import style from "./foodCards.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
// import Swiper and modules styles
import "swiper/css/navigation";
import "./swiper.css";
import Card from "./card/Card";

export default function FoodCards({ menus }) {

  const [width, setWidth] = useState(screen.width)

  window.addEventListener('resize', () => setWidth(screen.width))
  return (
    <div className={style.container}>
      <div className={style.titleCol}>
        <h3>Recomendados</h3>
      </div>
      <div className={style.carousel}>
        <Swiper
          modules={[Navigation]}
          slidesPerView={width > 600 ? 4 : 1}
          spaceBetween={width > 600 ? 40 : 0}
          navigation={true}
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
