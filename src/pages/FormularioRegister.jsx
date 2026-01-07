import { useState } from "react";
import { Formulario } from "../components/Formulario";

const FormularioRegister = () => {
  const [datos, setDatos] = useState({});
  const [errores, setErrores] = useState({});

  const enviarDatos = () => {
    const erroresTemp = {};

    const nameRegex = /^[a-zA-Z\s]{3,40}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!nameRegex.test(datos.nombre)) {
      erroresTemp.nombre = "Debe tener entre 3 y 40 caracteres y solo letras";
    }

    if (!emailRegex.test(datos.email)) {
      erroresTemp.email = "Correo electrónico inválido";
    }

    if (!usernameRegex.test(datos.usuario)) {
      erroresTemp.usuario = "Entre 3 y 15 caracteres, solo letras, números y _";
    }

    if (!passwordRegex.test(datos.contrasena)) {
      erroresTemp.contrasena =
        "Mínimo 8 caracteres, una mayúscula, una minúscula y un número";
    }

    if (datos.contrasena !== datos.confirmarContrasena) {
      erroresTemp.confirmarContrasena = "Las contraseñas no coinciden";
    }

    setErrores(erroresTemp);

    if (Object.keys(erroresTemp).length === 0) {
      alert("Registro exitoso!");
    }
  };

  const rutas = [
    {
      id: 1,
      mensaje: "Inicia Sesión",
      ruta: "/",
    },
  ];

  const campos = [
    {
      identificador: 1,
      label: "Nombre Completo",
      placeholder: "Ronaldo Franco",
      type: "text",
      name: "nombre",
    },
    {
      identificador: 2,
      label: "Email",
      placeholder: "ronaldacademy@gmail.com",
      type: "email",
      name: "email",
    },
    {
      identificador: 3,
      label: "Nombre de Usuario",
      placeholder: "Donald",
      type: "text",
      name: "usuario",
    },
    {
      identificador: 4,
      label: "Contraseña",
      placeholder: "*****",
      type: "password",
      name: "contrasena",
    },
    {
      identificador: 5,
      label: "Confirmar Contraseña",
      placeholder: "*****",
      type: "password",
      name: "confirmarContrasena",
    },
    {
      identificador: 6,
      label: "Fecha de Nacimiento",
      type: "date",
      name: "fechaNacimiento",
    },
  ];

  return (
    <div>
      <Formulario
        campos={campos}
        titulo={"Registro de Usuario"}
        subtitulo={"Completa tus datos para registrarse"}
        setDatos={setDatos}
        funcion={enviarDatos}
        errores={errores}
        rutas={rutas}
      />
    </div>
  );
};

export default FormularioRegister;
