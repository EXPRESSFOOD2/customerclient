import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/store/Product/ProductCard";
import style from "./Store.module.css";
import { NavLink } from "react-router-dom";

export default function Store() {
    const menu = useSelector((state) => state.fullMenu);         // Hook de traer data del estado global
    let products = menu.map((menuItem,index)=> {
        return (
          <NavLink key={index} to={`/store/${menuItem.id}`}>
            <ProductCard key={index} menuItem={menuItem}/>
          </NavLink>
        )
      })

    return (
        <div className={style.container}>
            {products}
        </div>
    )
}