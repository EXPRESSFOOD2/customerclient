import React from "react";
import { getMenuById } from "../../redux/actions/index"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailMenu = () => {
    const { id } = useParams();
    const dispatch = useDispatch();                                         // Dispachador de Redux
    useEffect(() => { dispatch(getMenuById(id)) },[dispatch, id])           // Precarga los elementos a mostrar
    const {name, description, url_image, price} = useSelector((state) => state.detailMenu);          // Hook de traer data del estado global
    //name,description,price,recomend_first,stock,is_active,url_image
    return (
      <div>
        <img src={url_image} alt={name} style={{width: "30%"}}/>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <h3>$ {price}</h3>
      </div>
    );
  }
  export default DetailMenu;