import { useState } from "react";
import { Formulario } from "../components/Formulario";

const FormularioRegister = () => {
  const [datos, setDatos] = useState({});

  const enviarDatos = () => {
    console.log(datos);
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
