import React from "react";
import LandingPage from "../../components/home/landingPage/LandingPage";
import Carousel from "../../components/home/carousel/Carousel";

export default function Home() {
  return (
    <div>
      <Carousel />
      <LandingPage />
    </div>
  );
}
