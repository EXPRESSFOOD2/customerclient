import React from "react";
import Form from "../../components/register/Form";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register() {
  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

  const formik = useFormik({
    initialValues: {
      name: "",
      last_name: "",
      account_name: "",
      phone: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es requerido"),
      last_name: Yup.string().required("El apellido es requerido"),
      account_name: Yup.string()
        .required("El nombre de usuario es requerido")
        .min(5, "debe ser mayor a 4 caracteres"),
      phone: Yup.string()
        .required("El Teléfono es requerido")
        .min(8, "de 8 a 15 caracteres")
        .max(15),
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
      <Form formik={formik} />
    </div>
  );
}
