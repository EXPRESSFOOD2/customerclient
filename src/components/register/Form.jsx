import React from "react";
import style from "./form.module.css";
import formIMG from "./image/formImg.jpg";
import Buttonimg from "./buttonimg";

export default function Form({ formik, image }) {
  return (
    <div className={style.superDiv}>
      <div className={style.container}>
        <form action="" className={style.form} onSubmit={formik.handleSubmit}>
          <div className={style.prev}>
            <img src={formIMG} alt="" />
          </div>
          <div className={style.infoContainer}>
            <div className={style.divi}>
              <h2>Crear cuenta</h2>
            </div>
            <Buttonimg image={image} />
            <div className={style.col}>
              <div className={style.col1}>
                <label htmlFor="">Nombre</label>
                <input
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  {...formik.getFieldProps("name")}
                  className={formik.errors.name ? style.errorInput : ""}
                />
                {formik.touched.name && formik.errors.name ? (
                  <label className={style.errorText}>
                    {formik.errors.name}
                  </label>
                ) : null}
              </div>
              <div className={style.col1}>
                <label htmlFor="">Apellido</label>
                <input
                  type="text"
                  placeholder="Apellido"
                  name="last_name"
                  {...formik.getFieldProps("last_name")}
                  className={formik.errors.last_name ? style.errorInput : ""}
                />
                {formik.touched.last_name && formik.errors.last_name ? (
                  <label className={style.errorText}>
                    {formik.errors.last_name}
                  </label>
                ) : null}
              </div>
            </div>
            <div className={style.col}>
              <div className={style.col1}>
                <label htmlFor="">Nombre de usuario</label>
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  name="account_name"
                  {...formik.getFieldProps("account_name")}
                  className={formik.errors.account_name ? style.errorInput : ""}
                />
                {formik.touched.account_name && formik.errors.account_name ? (
                  <label className={style.errorText}>
                    {formik.errors.account_name}
                  </label>
                ) : null}
              </div>
              <div className={style.col1}>
                <label htmlFor="">Teléfono</label>
                <input
                  type="text"
                  placeholder="Teléfono"
                  name="phone"
                  {...formik.getFieldProps("phone")}
                  className={formik.errors.phone ? style.errorInput : ""}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <label className={style.errorText}>
                    {formik.errors.phone}
                  </label>
                ) : null}
              </div>
            </div>
            <div className={style.col}>
              <div className={style.col1}>
                <label htmlFor="">E-mail</label>
                <input
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  {...formik.getFieldProps("email")}
                  className={formik.errors.email ? style.errorInput : ""}
                />
                {formik.touched.email && formik.errors.email ? (
                  <label className={style.errorText}>
                    {formik.errors.email}
                  </label>
                ) : null}
              </div>
              <div className={style.col1}>
                <label htmlFor="">Contraseña</label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  name="password"
                  {...formik.getFieldProps("password")}
                  className={formik.errors.password ? style.errorInput : ""}
                />
                {formik.touched.password && formik.errors.password ? (
                  <label className={style.errorText}>
                    {formik.errors.password}
                  </label>
                ) : null}
              </div>
            </div>
            <div className={style.crear}>
              <button>Crear</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
