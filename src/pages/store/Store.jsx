import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/store/Product/ProductCard";
import style from "./Store.module.css";
import { NavLink } from "react-router-dom";
import Pagination from "../../shared/Pagination/Pagination";

export default function Store() {
  const menu = useSelector((state) => state.fullMenu); // Hook de traer data del estado global
  let products = menu.map((menuItem, index) => {
    return (
      <NavLink key={index} to={`/store/menu/${menuItem.id}`}>
        <ProductCard key={index} menuItem={menuItem} />
      </NavLink>
    );
  });

  const [pagina, setPagina] = useState(1);
  const [porPagina] = useState(9);
  let maximo = Math.ceil(menu.length / porPagina);

  return (
    <>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      <div className={style.rows}>
        {/* <div>
          <p>opcion 1</p>
          <p>opcion 2</p>
        </div> */}
        <div className={style.container}>
          {products.slice(((pagina-1)*porPagina), (pagina)*porPagina)}
        </div>
      </div>
    </>
  )
}
