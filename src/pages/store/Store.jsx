import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../components/store/Product/ProductCard";
import ButtonFilter from "../..//components/buttonsFilter/ButtonFilter";
import style from "./Store.module.css";
import { Link } from "react-router-dom";
import Pagination from "../../shared/Pagination/Pagination";
import { getTagsAction, processFilterAction } from "../../redux/actions";

export default function Store() {
    // Hooks para manejar las Busquedas
    const dispatch = useDispatch(); // Dispachador de Redux
    useEffect(() => {
        dispatch(getTagsAction());
    }, [dispatch]); // Precarga los elementos a mostrar

    const menu = useSelector((state) => state.filteredMenu); // Hook de traer data del estado global
    const tags = useSelector((state) => state.tags); // Hook de traer data del estado global

    const [pagina, setPagina] = useState(1);
    const [porPagina] = useState(12);
    const [filters, setFilters] = useState([]);

    let maximo = Math.ceil(menu.length / porPagina);

    useEffect(() => {
        dispatch(processFilterAction(filters));
    }, [filters, dispatch]);

    let products = menu.map((menuItem, index) => {
        return (
            <Link key={index} to={`/menu/${menuItem.id}`}>
                <ProductCard key={index} menuItem={menuItem} />
            </Link>
        );
    });
    // eslint-disable-next-line array-callback-return
    let tagsButtons = tags.map((tag, index) => {
        return filters.includes(tag.name) ? (
            <ButtonFilter
                key={index}
                style={style.buttonactive}
                state={filters}
                setState={setFilters}
                name={tag.name}
            />
        ) : (
            <ButtonFilter
                key={index}
                style={style.button}
                state={filters}
                setState={setFilters}
                name={tag.name}
            />
        );
    });

    return (
        <div className={style.container}>
        <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo} />
        <div className={style.line}></div>
            <div className={style.subContainer}>
                <div className={style.divFilters}>
                    <span>Categorías :</span>
                    <div className={style.containerButtonFilters}>{tagsButtons}</div>
                </div>
                <div className={style.containerMenu}>
                    {products.slice((pagina - 1) * porPagina, pagina * porPagina)}
                </div>
            </div>
        </div>
    );
}
