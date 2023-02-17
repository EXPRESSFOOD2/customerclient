import React from "react";
import Navbar from "../../components/home/navbar/Navbar";
import LandingPage from "../../components/home/landingPage/LandingPage";
import Card from "../../components/home/Card/card"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFullMenu } from "../../redux/actions/index";

export default function Home() {
  const dispatch = useDispatch();                               // Dispachador de Redux
  useEffect(() => { dispatch(getFullMenu()) },[dispatch])     // Precarga los elementos a mostrar
  const menu = useSelector((state) => state.fullMenu);         // Hook de traer data del estado global

  return (
    <div>
      <Navbar />
      <LandingPage />
{/*       
      <h1>-*-*-*-**--**--*-*-*-**----**-</h1>
      {menu?.map((menuItem,index)=> {
        return (
          <Card key={index} menuItem={menuItem}/>
        )
      })} */}
    </div>
  );
}
