import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/store/Product/ProductCard";
import ButtonFilter from "../..//components/buttonsFilter/ButtonFilter";
import style from "./Store.module.css";
import { NavLink } from "react-router-dom";
import Pagination from "../../shared/Pagination/Pagination";
import { getTagsAction, processFilterAction } from "../../redux/actions";

export default function Store() {
      // Hooks para manejar las Busquedas
  const dispatch = useDispatch();                               // Dispachador de Redux
  useEffect(() => { dispatch(getTagsAction()) },[dispatch])     // Precarga los elementos a mostrar

  const menu = useSelector((state) => state.filteredMenu); // Hook de traer data del estado global
  const tags = useSelector((state) => state.tags); // Hook de traer data del estado global

  const [pagina, setPagina] = useState(1);
  const [porPagina] = useState(9);
  const [filters, setFilters] = useState([]);

  let maximo = Math.ceil(menu.length / porPagina);


  useEffect(()=>{
    dispatch(processFilterAction(filters))
  }, [filters, dispatch])

  let products = menu.map((menuItem, index) => {
    return (
      <NavLink key={index} to={`/menu/${menuItem.id}`}>
        <ProductCard key={index} menuItem={menuItem} />
      </NavLink>
    );
  });
  // eslint-disable-next-line array-callback-return
  let tagsButtons = tags.map((tag, index) => {
    return (
        filters.includes(tag.name)
          ? <ButtonFilter key={index} style={style.buttonactive} state={filters} setState={setFilters} name={tag.name} />
          : <ButtonFilter key={index} style={style.button} state={filters} setState={setFilters} name={tag.name} />
    );

  });

  return (
    <div className={style.container}>
   
      <div className={style.divFilters}>
          <h3 className={style.tagFilter}>Por Tags:</h3>
     <div className={style.containerButtonFilters}>{tagsButtons}</div>
      
         
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
