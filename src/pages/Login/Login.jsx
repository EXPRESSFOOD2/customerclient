import React from "react";
import CreateLogin from "../../components/Login/CreateLogin";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .matches(emailRegex, "Correo electronico invalido")
        .required("El email es requerido")
        .max(100, "máximo 100 caracteres"),

      password: Yup.string()
        .matches(passwordRegex, "contraseña invalida")
        .required("Se requiere una contraseña"),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <CreateLogin formik={formik} />
    </div>
  );
};

export default Login;
