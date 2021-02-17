 [![npm](https://img.shields.io/npm/v/gespro-utils?style=flat-square)](https://www.npmjs.com/package/gespro-utils)
 

# Gespro-utils
 Funciones generales para desarrollos de recursos Gespro

 ## Documentación de funciones
 >A continuación se detalla el contenido de cada uno de los ***scripts***, las funciones que contienen y para qué sirve cada una, los valroes que recibe como parametros y el dato que devuelve con ejemplos.


 ### akiri 👇
 ---
 Este *script* contiene dos funciones: ***getData*** y ***sendData***

#### getData 🔥
>Obtiene la respuesta que le envia un *API REST* mediante la utilización de *fetch* y *Async/Await*
~~~
  let json = await getData(url); 
  console.log(json);
~~~
+ Parámetro: 🖐️
1. **url**: recibe la url de la API o servicio web para realizar la solicitud *(request)*

+ Valor que devuelve: la popiedad *data* de la respuesta del servidor (en formato *JSON*)

#### sendData 🔥
>Envia un formdata a una API mediante el método *POST* de *fetch* 
~~~
const url = "https://organizacion/usuario";
let data = {
      "nombre": "Pepito Campos",
      "correo": "pepito@correo.de"
  };
let resp = await sendData (data, url); 
console.log(resp);
~~~
+ Parámetros: 🖐
1. **data**: dato en formato *JSON*
2. **url**: recibe la url de la API o servicio que recibe el dato mediante el método *POST*

+ Valor que devuelve: la popiedad *data* de la respuesta del servidor (en formato *JSON*)