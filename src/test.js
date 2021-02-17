const {fecha} = require("./fecha");

console.log( "Fecha en formato YY-M-D:", fecha("today") );
console.log( "Fecha de hoy en formato DD-M-YY:", fecha("hoy") );
console.log("Mes actual:", fecha("mes") );
console.log("dia de hoy:", fecha("dia") );
console.log( "Objeto con la fecha actual:", fecha("objHoy") );

