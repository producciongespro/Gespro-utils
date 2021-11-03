import * as utils from "./build/index.js";


async function test() {
    let res = await utils.getData("http://localhost/demoracia-a-la-mano/Webservices/obtener_videos_select.php");
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