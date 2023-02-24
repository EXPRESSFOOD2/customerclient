/* eslint-disable react/prop-types */
import React, { useState } from "react";
import style from "./form.module.css";
import { getImageUrl } from "../../redux/actions/index"
import { useDispatch } from "react-redux";

const Buttonimg = ({ imageFn }) => {
  const dispatch = useDispatch();
  const [ imageInputState, setImageInputState ] = useState("");
  const [ previewSource, setPreviewSource] = useState("");

  const handleImageInputChange = async (e) => {
    const inputImg = e.target.files[0];
    prepareImageToShowAndSend(inputImg);
    dispatch(getImageUrl(previewSource, imageFn));
  }

  const prepareImageToShowAndSend = (inputImg) => {
    const reader = new FileReader();
    reader.readAsDataURL(inputImg);
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  return (
    <div className={style.contentfile}>
      {/* //! TODO */}
      {/* Hacer que la imagen aparezca una vez se establece
          Si esa image existe => "+ Agregar Imagen" cambia por "Modificar Imagen"
      */}
      {/* {previewSource && (
        <img src={previewSource} alt="Profile Pic" />
      )} */}
      <p> + Agregar imagen</p>
      <input
        type="file"
        name="image"
        className={style.inputfile}
        onChange={handleImageInputChange}
        value={imageInputState}
      />

    </div>
  );
};

export default Buttonimg;
