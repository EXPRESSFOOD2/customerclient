import React from "react";
import { getMenuById } from "../../redux/actions/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./DetailMenu.module.css";

const DetailMenu = () => {
  const { id } = useParams();
  const dispatch = useDispatch(); // Dispachador de Redux
  useEffect(() => {
    dispatch(getMenuById(id));
  }, [dispatch, id]); // Precarga los elementos a mostrar

  const detail = useSelector((state) => state.detailMenu);
  const { name, description, url_image, price } = detail; // Hook de traer data del estado global
  //name,description,price,recomend_first,stock,is_active,url_image

  const handleCart = () => {
    let orderArray = localStorage.getItem("order") || "[]";

    const index = JSON.parse(orderArray).findIndex(
      (item) => item.id + "" === "" + detail.id
    );
    const aux = JSON.parse(orderArray);

    // si no esta en el array le acumento la cantidad
    if (index !== -1) {
      aux[index].quantity += 1;
      orderArray = aux;
    } else {
      // si esta lo agrego
      orderArray = [...aux, { id: detail.id, quantity: 1 }];
    }
    // se transforma y se manda
    const transform = JSON.stringify(orderArray);
    localStorage.setItem("order", transform);
  };

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
          <button className={styles.toCart} onClick={handleCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
export default DetailMenu;
