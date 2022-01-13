 [![npm](https://img.shields.io/npm/v/gespro-utils?style=flat-square)](https://www.npmjs.com/package/gespro-utils)
 

# Gespro-utils
 Funciones generales para desarrollos de recursos Gespro

 ## Uso
 ### 1- Instalción:

 ``npm i gespro-utils``

### 2- Import:

 ``import * as utils from "gespro-utls"``

o

``const utils = require("gespro-utils");``

### 3- Llamado a funciones:

``utils.getDate()``



 ## Documentación de funciones
 >A continuación se detalla el contenido de cada una de las ***funciones***, que contienen y para qué sirve cada una, los valroes que recibe como parametros y el dato que devuelve con ejemplos.


 ### Obtener y enviar datos a servidor 👇
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
``sendData (data, url, method) ``

>Envia un formdata a una API mediante el método *POST* de *fetch* 

+ Parámetros: 🖐
1. **data**: dato en formato *JSON*

2. **url**: recibe la url de la API o servicio que recibe el dato mediante el método *POST*

2. **method**: Tipo de acción (REST) que ejecuta (POST, PUT, DELETE, GET). Si omite el valor en este campo se entenderá que la acción por defecto es un *POST*


+ Valor que devuelve: la popiedad *data* de la respuesta del servidor (en formato *JSON*).

**Ejemplo:** 📜
~~~
const url = "https://organizacion/usuario";
let data = {
      "nombre": "Pepito Campos",
      "correo": "pepito@correo.de"
  };
let resp = await sendData (data, url, 'PUT'); 
console.log(resp);
~~~

 ### Buscar palabras en un determinado campo (etiquetas) 👇
 ---
 Este *script* contiene solamente una función: ***searchTags***:

#### buscar 🔥
`` searchTags (word, array, field)``
> Recibe un arreglo de objetos y busca mediante una expresión regular (*reg test*) en la propiedad ***"tags"***, o en un campo determinado la palabra que recibe mediante parámetro.

+ Parámetros: 🖐️
1. **word**: Palabra a buscar en el campo "tags" o en un campo defnido por el usuario.

2. **array**: Arreglo de objetos de js (formato JSON) en donde se va a realizar la búsqueda.

3. **field**: Nombre del campo en que se va a realizar la búqueda. Si se omite su valor se entiende que buscará por defecto en un campo que se llama "tags"

+ Valor que devuelve:Arreglo de objetos filtrados en  formato *JSON*

**Ejemplo:** 📜
~~~

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

let filtrados = searchTags ("sumas", recursos, "tags")
console.log("filtrados", filtrados);
  ~~~


  ### Obtener la fecha actual👇
 ---
 Este *script* contiene solamente una función: ***getToday***:

#### getToday 🔥
`` fecha (params)``
> Recibe una palabra *(string)* que determina el formato de fecha o el valor de fecha del sistema que debe devolver:

+ Parámetro: 🖐️
1. **params**: Especifica el formato o tipo de dato de fecha que debe devolver: 

***"t"*** 👉 (today) Deveule la fecha de actual en formato  aa-mm-dd

***"m"*** 👉 (month) Devuelve el mes actual.

***"d"*** 👉 (day) Devuelve la fecha del día actual.

***"y"*** 👉 (year) Devuelve el año actual.

***"full"*** Devuelve un objeto con las propiedades "day, month, year" actuales

📣 Importante: Si no recibe parámetros devuelve la fecha actual en formato dd-mm-yy

+ Valor que devuelve: fecha del sistema en diferentes formatos. **Nota:** el mes 1 corresponde a enero.


**Ejemplo:** 📜
~~~

console.log( "Fecha en formato YY-M-D:", getToday("t") );
console.log( "Fecha de hoy en formato DD-M-YY:", getToday() );
console.log("Mes actual:", getToday("m") );
console.log("dia de hoy:", getToday("d") );
console.log( "Objeto con la fecha actual:", getToday("full") );
~~~

 ### Almacenamiento en *local storage* 👇
---
 Este *script* contiene una serie de funciones que administran datos en *Local Storage*.

`` stIns(name, value)``
> Inserta en localStorage un arreglo, el cual puede contener cadenas de texto, objetos, números o booleanos.

**Ejemplo:** 📜
~~~
stIns("estudiantes", "Pepito");
~~~

`` stGet(name) ``
>Obtiene el arreglo del dato almacenado por el nombre.

**Ejemplo:** 📜
~~~
const estudiantes = stGet("estudiantes");
console.log(estudiantes)
// ["pepito"]
~~~

```stFind(name, value)```
>Devuelve el índice del elemento buscado. Si no se encuentra el elemento devuelve un -1

**Ejemplo:** 📜
~~~
const index = stFind("estudiantes", "Pepito");
console.log(index)
// 0
~~~

```stDel(name, value)```
>Elimina un objeto almacedo en determinado array (name).

**Ejemplo:** 📜
~~~
const isBorrado = stDel("estudiantes", "Pepito);
console.log(isBorrado);
//true
~~~



 ### Búsquedas en arreglos 👇
---
 Este *script* contiene una dos funciones que realizan búsuquedas en areglos de objetos. Una mediante un ID y la otra mediante una campo clave.

`` arrayFindById(array, id )``
> Buesca un objeto (registro - documento) en un arreglo de objetos mediante el campo *id*. Este campo puede ser numérico o texto.

**Ejemplo:** 📜
~~~
const item = arrayFindById(estudiantes, "1-0123-0321" );
~~~


`` arrayFindByKey(array, key, word )``
> Buesca un objeto (registro - documento) en un arreglo de objetos mediante un campo clave *key* con una palabra dada (word).

**Ejemplo:** 📜
~~~
let filtrado = [];
filtrado = arrayFindByKey(estudiantes, "nivel", 2 );
~~~



---
#### Detectar tipo de plataforma 🔥
`` platform ()``
> Detecta la platforma en la que se está ejecutando la aplicación JS.

* No lleva paramétros.
~~~
 console.log (platform() ); 
//Posibles resultados:  win - mac - linux - android - ios - null (en caso que no detecte el tipo).
~~~

---
#### Convertir fecha en fomrato DD/MM/YY 📅
`` dateConvert (date)``
> Recibe como parámetro un string de fecha con formato YY/MM/DD y devuelve la fecha en un string con el formato **DD/MM/YY**

* Parámetro: String de fecha. Ej: dateConvert("2022-02-22")
~~~
 console.log (dateConvert("2022-02-22") ); 
// Retorna "22/02/2022"
~~~

* Si se agrega el texto "text" como segundo parámetro:   ej: dateConvert("2022-02-22", "text" ) la función devuelve el nombre del mes abreviado con las primeras tres letras:
~~~
 console.log (dateConvert("2022-02-22"), "text" ); 
// Retorna "22 feb. 2022"
~~~