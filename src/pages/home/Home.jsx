import React from "react";
import LandingPage from "../../components/home/landingPage/LandingPage";
import Carousel from "../../components/home/carousel/Carousel";
import FoodCards from "../../components/home/foodCards/FoodCards";

export default function Home() {
  return (
    <div>
      <Carousel />
      <FoodCards />
    </div>
  );
}
