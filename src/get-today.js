export default function _getToday (opt) {
  const date = new Date();
  var tmpFecha = null;

  if (!opt) {
    opt = "hoy";
  }

  switch (opt) {
    case "t":
      tmpFecha =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      break;
    case "hoy":
      tmpFecha =
        date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
      break;
    case "m":    
      tmpFecha = date.getMonth() + 1;
      break;
    case "d":
      tmpFecha = date.getDate();
      break;
    case "full":
      tmpFecha = {
        day: date.getDate(),
        month: date.getMonth() + 1,
        year: date.getFullYear(),
      };

      break;

    default:
      tmpFecha = "uknown option";
      break;
  }
  return tmpFecha;
};
