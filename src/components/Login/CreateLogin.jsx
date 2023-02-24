/* eslint-disable react/prop-types */
import React from "react";
import style from "./CreateLogin.module.css";
import img from "./image/logoSinFondo.png";

const CreateLogin = ({ formik }) => {
  return (
<>
    <div className={style.superDiv}>
      <div className={style.createLogin}>
        <div className={style.prev}>
          <img src={img} alt="not found" className={style.image} />
          <p>¡Te damos la bienvenida!</p>
        </div>
        <form action="" className={style.form} onSubmit={formik.handleSubmit}>
          <div className={style.col}>
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              className={formik.errors.email ? style.errorInput : ""}
              id="email"
              name="email"
              placeholder="E-mail"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <label className={style.errorText}>{formik.errors.email}</label>
            ) : null}
          </div>
          <div className={style.col}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className={formik.errors.password ? style.errorInput : ""}
              id="password"
              name="password"
              placeholder="Contraseña"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <label className={style.errorText}>
                {formik.errors.password}
              </label>
            ) : null}
            <a href="#">olvide mi contraseña</a>
          </div>
          <div className={style.logins}>
            <button type="submit">iniciar sesión</button>
          </div>
          <div className={style.checkbox}>
            <input type="checkbox" name="" id="" value="rememberMe" />
            <label htmlFor="">Recuerdame</label>
          </div>
        </form>
        <div className={style.question}>
          <p>¿primera vez en Space Food? </p>{" "}
          <a href="/register"> ¡Registrate! </a>
        </div>
        <div className={style.logins}>


            <button type="submit" onClick={()=> window.location.href='https://apiexpressfood.up.railway.app/auth/google'}>Google</button>
          </div>

         
           
           
              
         
          

       
            
           
              
            
     </div>
        </div>
    </>
  );
};

export default CreateLogin;
