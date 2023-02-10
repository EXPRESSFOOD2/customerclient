import React from "react";
import style from "./form.module.css";
import formIMG from "./image/formImg.jpg";

export default function Form() {
  return (
    <div className={style.container}>
      <form action="" className={style.form}>
        <div>
          <img src={formIMG} alt="" />
          <h3 className={style.centerTextImg}>Acá te logueas</h3>
        </div>
        <div className={style.infoContainer}>
          <h2>Crear cuenta</h2>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="text" placeholder="Nombre de usuario" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="number" placeholder="Teléfono" />
          <button>Crear</button>
        </div>
      </form>
    </div>
  );
}
