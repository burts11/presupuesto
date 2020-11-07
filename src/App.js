import React, { useState, useEffect } from "react";
import Pregunta from "./Components/Pregunta";
import Formulario from "./Components/Formulario";
import Listado from "./Components/Listado";
import ControlPresupuesto from "./Components/ControlPresupuesto";

function App() {
  //Definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [gasto, setGasto] = useState(0);
  const [mostrarPregunta, setPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [restante, setRestante] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  // UseEffect que actualiza el restante

  useEffect(() => {
    if (crearGasto) {
      //agrega el nuevo presupuesto
      setGastos([...gastos, restante]);
      setCrearGasto(false);

      //resta del presupuesto
      const presupuestoRestanto = gasto - restante.cantidad;
      setGasto(presupuestoRestanto);
    }
  }, [restante]);

  

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setGasto={setGasto}
              setPregunta={setPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  presupuesto={presupuesto}
                  setRestante={setRestante}
                  setCrearGasto={setCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />

                <ControlPresupuesto presupuesto={presupuesto} gasto={gasto} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
