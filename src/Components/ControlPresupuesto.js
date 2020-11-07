import React, { Fragment } from "react";
import { revisarPresupuesto}from "../helpers"

const ControlPresupuesto = ({ presupuesto, gasto }) => {
  return (
    <Fragment>
      <div className="alert alert-primary">Presupuesto:{presupuesto}</div>
      <div className={revisarPresupuesto(presupuesto,gasto)}>Restante:{gasto}</div>
    </Fragment>
  );
};

export default ControlPresupuesto;
