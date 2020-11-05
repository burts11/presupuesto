import React, { useState } from "react";
import Pregunta from "./Components/Pregunta";
import Formulario from "./Components/Formulario";

function App() {
  //Definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [gasto, setGasto] = useState(0);
  const [mostrarPregunta, setPregunta] = useState(true);

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
                />
              </div>
          <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
