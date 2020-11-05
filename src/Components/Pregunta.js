import React, { Fragment, useState } from "react";
import Error from "./Error"

const Pregunta = ({setPresupuesto,setGasto,setPregunta}) => {
  //Crear el useState
  const [cantidad, almacenarCantidad] = useState(0);
  const [error, actualizaError] = useState(false);
  //Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();

    //Validar
    if(cantidad < 1 || isNaN(cantidad)){
        actualizaError(true);
        return;
    }
    //si se pasa la validación
    actualizaError(false)
    setPresupuesto(cantidad)
    setGasto(cantidad)
    setPregunta(false)
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error mensaje="El presupuesto es Inconrrecto" />: null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          // funcion que lee el presupuesto
          onChange={(e) => {
            almacenarCantidad(parseInt(e.target.value, 10));
          }}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
