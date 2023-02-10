import React from "react";
import style from "./form.module.css";
import formIMG from "./image/formImg.jpg";

export default function Form() {
  return (
    <div className={style.container}>
      <form action="" className={style.form}>
        <img src={formIMG} alt="" />
        <div className={style.infoContainer}>
          <h2>Crear cuenta</h2>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="text" placeholder="Nombre de usuario" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Teléfono" />
          <button>Crear</button>
        </div>
      </form>
    </div>
  );
}
