import { useState } from "react";
import { Formulario } from "../components/Formulario";

const FormularioRegister = () => {
  const [datos, setDatos] = useState({});

  const enviarDatos = () => {
    const nameRegex = /^[]{3,40}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!nameRegex.test(datos.nombre || "")) {
      alert(
        "El nombre no es válido. Debe tener entre 3 y 40 caracteres y solo contener letras y espacios."
      );
      return;
    }

    if (!emailRegex.test(datos.email || "")) {
      alert("El correo electrónico no es válido.");
      return;
    }

    if (!usernameRegex.test(datos.usuario || "")) {
      alert(
        "El nombre de usuario no es válido. Debe tener entre 3 y 15 caracteres y solo contener letras, números y guiones bajos."
      );
      return;
    }

    if (!passwordRegex.test(datos.contrasena || "")) {
      alert(
        "La contraseña no es válida. Debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un número."
      );
      return;
    }

    if (datos.contrasena !== datos.confirmarContrasena) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    alert("Registro exitoso!");
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
        rutas={rutas}
      />
    </div>
  );
};

export default FormularioRegister;
