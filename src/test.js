const { buscar } = require("./buscador");

let recursos = [
  {
    nombre: "Aprendo a leer con la niña Pochita",
    tags: "lectura, primero, español, básico",
  },
  {
    nombre: "Sumando con los patos saltarines",
    tags: "sumas, primero, matematica, básico",
  },
];

let filtrados = buscar("sumas", recursos);
console.log("filtrados", filtrados);
