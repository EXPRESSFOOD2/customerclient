import React from "react";
import { getMenuById } from "../../redux/actions/index"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from './DetailMenu.module.css';

const DetailMenu = () => {
    const { id } = useParams();
    const dispatch = useDispatch();                                         // Dispachador de Redux
    useEffect(() => { dispatch(getMenuById(id)) },[dispatch, id])           // Precarga los elementos a mostrar
    const {name, description, url_image, price} = useSelector((state) => state.detailMenu);          // Hook de traer data del estado global
    //name,description,price,recomend_first,stock,is_active,url_image
    return (
        <div className={styles.page}>
        <div className={styles.detail}>
          <div className={styles.image}>
                <img src={url_image} alt={name} />
          </div>
          <div className={styles.info}>
                <h1>{name}</h1>
                <p>{description}</p>
                <h3>$ {price}</h3>
          </div>
            </div>
        </div>
    );
  }
  export default DetailMenu;