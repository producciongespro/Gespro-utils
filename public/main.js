import * as utils from "./build/index.js";
const URI_API = "http://localhost:3500/test";
const estudiante = {
  nombre: "Pepito",
  correo: "pepito@correo.de"
}


async function test() {
  /*
  *akiri get data
  let data = await utils.getData(URI_API);
  console.log("REcibidos->", data);   
    */  


    /*
    akiri send Data    
    let res = await utils.sendData(URI_API, estudiante, "PUT");   
     */
    
     
    
    /* searchTags
    const filtrado = utils.searchTags("dragon", data, "name" );
    console.log("filtrado", filtrado);
    */

/**
 * get date (today)
 * console.log(utils.getToday("full"));
 */
const estudiante = {
  nombre: "Pepito",
  correo: "pepito@correo.de",
  id: "123654789"
}

console.log(utils.stGet("estudiantes"));
//let estudiantes = utils.stGet("estudiantes");
//console.log(estudiantes);

//let indice = utils.stFind("estudiantes", "Pepe");
//console.log(indice);

//let res = utils.stDel("estudiantes", "Lola");
//console.log(res);

    
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