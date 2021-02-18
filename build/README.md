 [![npm](https://img.shields.io/npm/v/gespro-utils?style=flat-square)](https://www.npmjs.com/package/gespro-utils)
 

# Gespro-utils
 Funciones generales para desarrollos de recursos Gespro

 ## Documentación de funciones
 >A continuación se detalla el contenido de cada uno de los ***scripts***, las funciones que contienen y para qué sirve cada una, los valroes que recibe como parametros y el dato que devuelve con ejemplos.


 ### akiri.js 👇
 ---
 Este *script* contiene dos funciones: ***getData*** y ***sendData***:

#### getData 🔥
``getData (url) ``

>Obtiene la respuesta que le envia un *API REST* mediante la utilización de *fetch* y *Async/Await*

+ Parámetro: 🖐️
1. **url**: recibe la url de la API o servicio web para realizar la solicitud *(request)*

+ Valor que devuelve: la popiedad *data* de la respuesta del servidor (en formato *JSON*).

**Ejemplo:** 📜

~~~
  let json = await getData(url); 
  console.log(json);
~~~


#### sendData 🔥
``sendData (data, url) ``

>Envia un formdata a una API mediante el método *POST* de *fetch* 

+ Parámetros: 🖐
1. **data**: dato en formato *JSON*
2. **url**: recibe la url de la API o servicio que recibe el dato mediante el método *POST*

+ Valor que devuelve: la popiedad *data* de la respuesta del servidor (en formato *JSON*).

**Ejemplo:** 📜
~~~
const url = "https://organizacion/usuario";
let data = {
      "nombre": "Pepito Campos",
      "correo": "pepito@correo.de"
  };
let resp = await sendData (data, url); 
console.log(resp);
~~~

 ### buscador.js 👇
 ---
 Este *script* contiene solamente una función: ***buscar***:

#### buscar 🔥
`` buscar (palabra, array)``
> Recibe un arreglo de objetos y busca mediante una expresión regular (*reg test*) en la propiedad ***"tags"***, la palabra que recibe mediante parámetro.

+ Parámetros: 🖐️
1. **url**: recibe la url de la API o servicio web para realizar la solicitud *(request)*

+ Valor que devuelve: la popiedad *data* de la respuesta del servidor (en formato *JSON*)

**Ejemplo:** 📜
~~~
  const { buscar } = require("./buscador");

let recursos = [
  {
    nombre: "Aprendo a leer con la niña Pochita",
    tags: "lectura, primero, español, básico"
  },
  {
    nombre: "Sumando con los patos saltarines",
    tags: "sumas, primero, matematica, básico"
  },
];

let filtrados = buscar("sumas", recursos);
console.log("filtrados", filtrados);
  ~~~


  ### fecha.js 👇
 ---
 Este *script* contiene solamente una función: ***fecha***:

#### fecha 🔥
`` fecha (params)``
> Recibe una palabra *(string)* que determina el formato de fecha o el valor de fecha del sistema que debe devolver:

+ Parámetro: 🖐️
1. **params**: Especifica el formato o tipo de dato de fecha que debe devolver: ***"today", "hoy", "mes", "dia", "objHoy"***

+ Valor que devuelve: fecha del sistema en diferentes formatos. **Nota:** el mes 1 corresponde a enero.


**Ejemplo:** 📜
~~~
const {fecha} = require("./fecha");

console.log( "Fecha en formato YY-M-D:", fecha("today") );
console.log( "Fecha de hoy en formato DD-M-YY:", fecha("hoy") );
console.log("Mes actual:", fecha("mes") );
console.log("dia de hoy:", fecha("dia") );
console.log( "Objeto con la fecha actual:", fecha("objHoy") );
~~~


  ### plataforma.js 👇
 ---
 Este *script* contiene solamente una función: ***fecha***:

#### plataforma 🔥
`` plataforma ()``
> Recibe una palabra *(string)* que determina el formato de fecha o el valor de fecha del sistema que debe devolver:

+ Parámetro: 🖐️
No recibe ningún parámetro.

+ Valor que devuelve: Tipo de plataforma en la que se ejecuta la función. Por lo que se relaciona con el dipositivo. A saber: "escritorio" o "movil"


**Ejemplo:** 📜
~~~
const {dispositivo} = require("./dispositivo");

console.log( "Estoy en un dispositivo", dispositivo() );
~~~