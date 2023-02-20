import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/store/Product/ProductCard";
import ButtonFilter from "../..//components/buttonsFilter/ButtonFilter";
import style from "./Store.module.css";
import { NavLink } from "react-router-dom";
import Pagination from "../../shared/Pagination/Pagination";

export default function Store() {
  const menu = useSelector((state) => state.fullMenu); // Hook de traer data del estado global
  const ingredients = useSelector((state) => state.allIngredients); // Hook de traer data del estado global
  let products = menu.map((menuItem, index) => {
    return (
      <NavLink key={index} to={`/store/menu/${menuItem.id}`}>
        <ProductCard key={index} menuItem={menuItem} />
      </NavLink>
    );
  });
  // eslint-disable-next-line array-callback-return
  let ingredientsButtons = ingredients.map((ingredient, index) => {
    if(ingredient.layer ===0){
    return (
      
        <ButtonFilter key={index} name={ingredient.name} />
  
    )};
  });

  const [pagina, setPagina] = useState(1);
  const [porPagina] = useState(9);
  let maximo = Math.ceil(menu.length / porPagina);
 
  return (
    <div className={style.container}>
   
      <div className={style.divFilters}>
          <h3 className={style.tagFilter}>Por ingredientes:</h3>
     <div className={style.containerButtonFilters}>{     ingredientsButtons}</div>
      
         
        </div>
        <div className={style.containerPagination}>
      <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </div>
   
       
        <div className={style.containerMenu}>
          {products.slice((pagina - 1) * porPagina, pagina * porPagina)}
        </div>

    </div>
  );
}
