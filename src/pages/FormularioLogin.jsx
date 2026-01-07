import React, { useState } from "react";
import { Formulario } from "../components/Formulario";

const FormularioLogin = () => {
  const [datos, setDatos] = useState({});

  const enviarDatos = () => {


    console.log(datos);
  };

  const rutas = [
    {
        id: 1,
        mensaje: "Crea tu cuenta",
        ruta: "/Registro",
    }, 
    {
        id: 2,
        mensaje: "¿Olvidaste tu Contraseña?",
        ruta: "#",
    }
  ]

  const campos = [
    {
      identificador: 1,
      label: "Correo",
      placeholder: "Ronaldo Franco",
      type: "email",
      name: "correo",
    },
    {
      identificador: 2,
      label: "Contraseña",
      placeholder: "**************",
      type: "password",
      name: "contraseña",
    },
  ];
  return (
    <div>
      <Formulario
        campos={campos}
        titulo={"Iniciar Sesión"}
        subtitulo={"Bienvenid@"}
        setDatos={setDatos}
        funcion={enviarDatos}
        color={"red"}
        rutas={rutas}
      />
    </div>
  );
};

export default FormularioLogin;
