import * as utils from "./build/index.js";
const URI_API = "http://localhost:3500/test";
const estudiante = {
  nombre: "Pepito",
  correo: "pepito@correo.de"
}


async function test() {
    //let res = await utils.getData(URI_API);
    let res = await utils.sendData(URI_API, estudiante, "PUT");
    
    
    console.log(res);    
}



test ();










/*
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

  */