import { useState } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

export const Formulario = ({
  campos,
  titulo,
  subtitulo,
  setDatos,
  funcion,
  color,
  errores,
  rutas,
  validarDatos,
}) => {
  const [valores, setValores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target; //Se acceder al nombre y el valor que contiene
    let valoresActualizados = { ...valores, [name]: value };
    setValores(valoresActualizados);
    setDatos?.(valoresActualizados); //Si esta definido
    validarDatos?.();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    funcion?.();
  };

  return (
    <Layout>
      <div className="contenedorFormulario">
        {
          titulo && <h2 className="title">{titulo}</h2> //Si contiene h2 muestrelo sino pues no
        }

        {
          subtitulo && <h2 className="subtitle">{subtitulo}</h2> //Si contiene h2 muestrelo sino pues no
        }

        <form onSubmit={handleSubmit} className="form">
          {
            //Campos es el json enviado
            //campo es cada elemento json de cmapos
            campos.map((campo) => (
              <div key={campo.identificador} className="contenedorCampo">
                <label className="labelFormulario">{campo.label}</label> <br />
                <input
                  name={campo.name}
                  type={campo.type}
                  className={`inputs ${color}`}
                  onChange={handleChange}
                  placeholder={campo.placeholder}
                />{" "}
                {errores[campo.name] && (
                  <span className="error-text">{errores[campo.name]}</span>
                )}
                <br />
              </div>
            ))
          }

          {}

          {rutas?.map((ruta) => (
            <p key={ruta.id}>
              <Link to={ruta.ruta}>{ruta.mensaje}</Link>
            </p>
          ))}

          <button type="submit" className="boton">
            Confirmar
          </button>
        </form>
      </div>
    </Layout>
  );
};

export const Boton = () => {
  return <div></div>;
};
