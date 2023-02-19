import React from "react";
import Carousel from "../../components/home/carousel/Carousel";
import FoodCards from "../../components/home/foodCards/FoodCards";
import { useSelector } from "react-redux";

export default function Home() {
  const menus = useSelector((state) => state.fullMenu);

  return (
    <div>
      <Carousel />
      <FoodCards menus={menus} />
    </div>
  );
}
