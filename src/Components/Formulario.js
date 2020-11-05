import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({ presupuesto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //construir gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    console.log(gasto)
    //pasar gasto al componente principal

    //resetear form
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>

      {error ? <Error mensaje="El presupuesto es Inconrrecto" /> : null}

      <div className="campo">
        <label>Nombre gasto</label>

        <input
          type="text"
          className="u-full-width"
          placeholder="Ejemplo Transporte"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Importe gasto</label>

        <input
          type="text"
          className="u-full-width"
          placeholder="ejemplo 300"
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

export default Formulario;
