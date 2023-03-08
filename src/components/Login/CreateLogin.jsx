/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import { useLocation } from "react-router-dom";
import style from "./CreateLogin.module.css";
import img from "./image/logoSinFondo.png";

const CreateLogin = () => {
    const { pathname } = useLocation()
  return (
      <div className={pathname === "/login"? style.superDivInLogin :style.superDiv}>
          <div className={pathname === "/login"? style.createLoginInLogin :style.createLogin}>
          
              <img src={img} alt="not found" className={style.image} />
              <p>Por favor logueate para hacer tu pago</p>
 
              <div className={style.loginsGo}>
                  <img src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" />
                  <button
                      type="submit"
                      onClick={() =>
                          (window.location.href = `${process.env.REACT_APP_GOOGLE_REDIRECT_URL_LOGINCOMPONENT_LOCAL || process.env.REACT_APP_GOOGLE_REDIRECT_URL_LOGINCOMPONENT_DEPLOY}` )
                      }>
                      Google
                  </button>
              </div>
              
          </div>
      </div>
  );
};

export default CreateLogin;
