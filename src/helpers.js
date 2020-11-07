export const revisarPresupuesto = (presupuesto, gasto) => {
  let clase;
  if (presupuesto / 4 > gasto) {
    clase = "alert alert-danger";
  } else if (presupuesto / 2 > gasto) {
    clase = "alert alert-warning";
  } else {
    clase = "alert alert-success";
  }
  return clase;
};
