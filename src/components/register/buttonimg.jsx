import React from "react";
import style from "./form.module.css";

const Buttonimg = ({ image }) => {
  return (
    <div className={style.contentfile}>
      <p> + Agregar imagen</p>
      <input
        type="file"
        className={style.inputfile}
        value=""
        onChange={(e) => {
          image(e);
        }}
      />
    </div>
  );
};

export default Buttonimg;
