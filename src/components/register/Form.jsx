import React from "react";
import style from "./form.module.css";
import formIMG from "./image/formImg.jpg";

export default function Form() {
  return (
    <div className={style.container}>
      <form action="" className={style.form}>
        <img src={formIMG} alt="" />
        <div>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}
