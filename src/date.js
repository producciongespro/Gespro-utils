export function fecha (opt) {
  const date = new Date();
  var tmpFecha = null;

  switch (opt) {
    case "today":
      tmpFecha =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      break;
    case "hoy":
      tmpFecha =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      break;
    case "mes":
      tmpFecha = date.getMonth() + 1;
      break;
    case "dia":
      tmpFecha = date.getDate();
      break;
    case "objHoy":
      tmpFecha = {
        dia: date.getDate(),
        mes: date.getMonth() + 1,
        anno: date.getFullYear(),
      };

      break;

    default:
      tmpFecha = "opción descnocida";
      break;
  }
  return tmpFecha;
};
