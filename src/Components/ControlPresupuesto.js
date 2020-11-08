import React, { Fragment } from "react";
import { revisarPresupuesto } from "../helpers";
import PropTypes from "prop-types";

const ControlPresupuesto = ({ presupuesto, gasto }) => {
  //Poner punto entre los numeros
  const punto = (id) => {
    const cambio = Intl.NumberFormat("de-DE").format(id);
    return cambio;
  };

  return (
    <Fragment>
      <div className="alert alert-primary">
        Presupuesto:{punto(presupuesto)}
      </div>
      <div className={revisarPresupuesto(presupuesto, gasto)}>
        Restante:{punto(gasto)}
      </div>
    </Fragment>
  );
};
ControlPresupuesto.propTypes = {
  gasto: PropTypes.number.isRequired,
  presupuesto: PropTypes.number.isRequired,
};
export default ControlPresupuesto;
