import React, { useEffect } from "react";
import Carousel from "../../components/home/carousel/Carousel";
import FoodCards from "../../components/home/foodCards/FoodCards";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../shared/Loading/Loading";
import { getRecommendedMenu } from "../../redux/actions";

export default function Home() {
  const menus = useSelector((state) => state.recommendedMenu);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!menus.length) {
      dispatch(getRecommendedMenu());
    }
  }, [menus, dispatch]);

  return (
    <div>
      <Carousel />
      {menus.length ? <FoodCards menus={menus} /> : <Loading />}
    </div>
  );
}
