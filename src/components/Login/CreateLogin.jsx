/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from "react";
import style from "./CreateLogin.module.css";
import img from "./image/logoSinFondo.png";
// const redirectDeploy = "https://apiexpressfood.up.railway.app"
const redirectLocal = "http://localhost:3002"
const CreateLogin = () => {
  return (
      <div className={style.superDiv}>
          <div className={style.createLogin}>
          
              <img src={img} alt="not found" className={style.image} />
              <p>Por favor logueate para hacer tu pago</p>
 
              <div className={style.loginsGo}>
                  <img src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="" />
                  <button
                      type="submit"
                      onClick={() =>
                          (window.location.href = `${redirectLocal}/auth/google` )
                      }>
                      Google
                  </button>
              </div>
              <div className={style.loginsFa}>
                  <img src="https://cdn-icons-png.flaticon.com/128/747/747543.png" alt="" />
                  <button>Facebook</button>
              </div>
          </div>
      </div>
  );
};

export default CreateLogin;
