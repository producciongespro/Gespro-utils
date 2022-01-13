const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

export default function _getToday(opt) {
  let tmpDate = null;

  if (!opt) {
    opt = "hoy";
  }

  switch (opt) {
    case "t":
      tmpDate = addZero();
      break;
    case "hoy":
      tmpDate = day + "-" + month + "-" + year;
      break;
    case "m":
      tmpDate = month;
      break;
    case "d":
      tmpDate = day;
      break;
    case "y":
      tmpDate = year;
      break;
    case "full":
      tmpDate = { day, month, year };
      break;

    default:
      tmpDate = "uknown option";
      break;
  }
  return tmpDate;
}

function addZero() {
  let newDate;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (month <= 9) {
    newDate = `${year}-0${month}-${day}`;
  } else {
    newDate = `${year}-${month}-${day}`;
  }
  return newDate;
}
