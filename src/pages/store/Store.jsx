import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/store/Product/ProductCard";
import ButtonFilter from "../..//components/buttonsFilter/ButtonFilter";
import style from "./Store.module.css";
import { NavLink } from "react-router-dom";
import Pagination from "../../shared/Pagination/Pagination";
import { resetFilter } from "../../redux/actions";

export default function Store() {
  const menu = useSelector((state) => state.filteredMenu); // Hook de traer data del estado global
  const ingredients = useSelector((state) => state.allIngredients); // Hook de traer data del estado global
  const [pagina, setPagina] = useState(1);
  const [porPagina] = useState(9);
  const [filters, setFilters] = useState([]);
  let maximo = Math.ceil(menu.length / porPagina);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!filters.length){
      dispatch(resetFilter())
      }
  }, [filters, dispatch])
 

  let products = menu.map((menuItem, index) => {
    return (
      <NavLink key={index} to={`/store/menu/${menuItem.id}`}>
        <ProductCard key={index} menuItem={menuItem} />
      </NavLink>
    );
  });
  // eslint-disable-next-line array-callback-return
  let ingredientsButtons = ingredients.map((ingredient, index) => {
    if(ingredient.layer >0){
    return (
      filters.includes(ingredient.name) ?
        <ButtonFilter key={index} style={style.buttonactive} state={filters} setState={setFilters} name={ingredient.name} /> :
        <ButtonFilter key={index} style={style.button} state={filters} setState={setFilters} name={ingredient.name} />
    )}
  });

 
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
