import React from "react";

const Gasto = ({ gasto }) => (
  <li className="gastos">
    <p>
      {gasto.nombre}

      <span className="gasto">{Intl.NumberFormat("de-DE").format(gasto.cantidad)}€</span>
    </p>
  </li>
);

export default Gasto;
