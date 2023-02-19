import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/store/Product/ProductCard";
import style from "./Store.module.css";
import { NavLink } from "react-router-dom";
import Pagination from "../../shared/Pagination/Pagination";
import Filter from "../../shared/Filter/Filter"
import FILTER_OPTIONS from "../../shared/Filter/Filter_Options"

export default function Store() {
  const menu = useSelector((state) => state.fullMenu); // Hook de traer data del estado global
  let products = menu.map((menuItem, index) => {
    return (
      <NavLink key={index} to={`/store/menu/${menuItem.id}`}>
        <ProductCard key={index} menuItem={menuItem} />
      </NavLink>
    );
  });
  const { f1, f2, f3 } = FILTER_OPTIONS;
  const [pagina, setPagina] = useState(1);
  const [porPagina] = useState(9);
  let maximo = Math.ceil(menu.length / porPagina);
  console.log("F1: "+f1.title);
  return (
    <>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      <div className={style.rows}>
        <div>
          <Filter title={f1.title} options={f1.options} action={f1.action} />
          <Filter title={f2.title} options={f2.options} action={f2.action} />
          <Filter title={f3.title} options={f3.options} action={f3.action} />
        </div>
        <div className={style.container}>
          {products.slice(((pagina-1)*porPagina), (pagina)*porPagina)}
        </div>
      </div>
    </>
  )
}
