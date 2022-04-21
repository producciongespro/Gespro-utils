export default function _dateConvert(param, mode) {
  let newDate;
  let months = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "set",
    "oct",
    "nov",
    "dic",
  ];

  let arrayDate = param.split("-");    
  let day = arrayDate[2].split(" ")[0];
  let time = arrayDate[2].split(" ")[1];
  let month = arrayDate[1];
  let year = arrayDate[0];

  if (mode === "text") {
    newDate = `${day} ${months[parseInt(month) - 1]}. ${year}`;
  } else {
    newDate = `${day}/${month}/${year}`;
  }

  return newDate;
}
