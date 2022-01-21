async function $dc97d1b36c8aca73$export$7a171f172be0782e(url) {
    let res = null;
    try {
        res = await fetch(url);
        res = await res.json();
    } catch (error) {
        console.log(error);
    }
    return res;
}
async function $dc97d1b36c8aca73$export$c48ca2d5cde02408(url, data, method) {
    let res = null;
    if (!method) method = "POST";
    try {
        res = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.log(error);
    }
    res = await res.json();
    return res;
}
async function $dc97d1b36c8aca73$export$e7cdd9ab52da88de(url, items, method) {
    const formData = new FormData();
    if (!method) method = "POST";
    for(let index = 0; index < items.length; index++)formData.append(items[index].name, items[index].val);
    const resp = await fetch(url, {
        method: method,
        body: formData
    });
    let json = await resp.json();
    return json;
}


function $90129c1403635530$export$2e2bcd8739ae039(word, array, field) {
    let tmpArray = [];
    //si la variable campo está vacía se agrega "tags" por defecto
    if (!field) field = "tags";
    word = word.toLowerCase();
    word = $90129c1403635530$var$eliminarTildes(word);
    //console.log("word ingresada:", word);
    const patt = new RegExp(word);
    array.forEach((item)=>{
        let str = $90129c1403635530$var$eliminarTildes(item[field]);
        str = str.toLowerCase();
        const res = patt.test(str);
        if (res) tmpArray.push(item);
    });
    return tmpArray;
}
const $90129c1403635530$var$eliminarTildes = (cadena)=>{
    //console.log("cadena:",cadena);
    let tmpCadena = cadena.replace(/á/g, "a");
    tmpCadena = tmpCadena.replace(/é/g, "e");
    tmpCadena = tmpCadena.replace(/í/g, "i");
    tmpCadena = tmpCadena.replace(/ó/g, "o");
    tmpCadena = tmpCadena.replace(/ú/g, "u");
    //console.log("tmpCadena",tmpCadena);
    return tmpCadena;
};


const $89f400bd40e47310$var$date = new Date();
const $89f400bd40e47310$var$year = $89f400bd40e47310$var$date.getFullYear();
const $89f400bd40e47310$var$month = $89f400bd40e47310$var$date.getMonth() + 1;
const $89f400bd40e47310$var$day = $89f400bd40e47310$var$date.getDate();
function $89f400bd40e47310$export$2e2bcd8739ae039(opt) {
    let tmpDate = null;
    if (!opt) opt = "hoy";
    switch(opt){
        case "t":
            tmpDate = $89f400bd40e47310$var$addZero();
            break;
        case "hoy":
            tmpDate = $89f400bd40e47310$var$day + "-" + $89f400bd40e47310$var$month + "-" + $89f400bd40e47310$var$year;
            break;
        case "m":
            tmpDate = $89f400bd40e47310$var$month;
            break;
        case "d":
            tmpDate = $89f400bd40e47310$var$day;
            break;
        case "y":
            tmpDate = $89f400bd40e47310$var$year;
            break;
        case "full":
            tmpDate = {
                day: $89f400bd40e47310$var$day,
                month: $89f400bd40e47310$var$month,
                year: $89f400bd40e47310$var$year
            };
            break;
        default:
            tmpDate = "uknown option";
            break;
    }
    return tmpDate;
}
function $89f400bd40e47310$var$addZero() {
    let newDate;
    const year = $89f400bd40e47310$var$date.getFullYear();
    const month = $89f400bd40e47310$var$date.getMonth() + 1;
    const day = $89f400bd40e47310$var$date.getDate();
    if (month <= 9) newDate = `${year}-0${month}-${day}`;
    else newDate = `${year}-${month}-${day}`;
    return newDate;
}


function $014e23e532da4aa4$export$27a48efc044c200a(nombre, valor) {
    //console.log(nombre, "--->", valor);
    //Priemro verifica que el dato localstorage esté almacenado    
    let tmpData = localStorage.getItem(nombre);
    let isAlmacenado = null;
    if (tmpData) {
        //------- Instrucciones si encuentra el dato en LS
        //parserar el string a json
        tmpData = JSON.parse(tmpData);
        //Antes de almacenar verifica que no se encuentre en el array 
        //para evitar elementos duplicados 
        //console.log(tmpData);
        const indice = tmpData.indexOf(valor);
        //console.log("indice", indice);
        // Si el índice es igual a -1 significa que no el elemento no está agregado 
        // por lo que procede a inlcuirlo
        if (indice === -1) {
            //hace el push en el arreglo en memroia 
            tmpData.push(valor);
            //crar un nuevo arreglo en localsotarge con el dato actualizado (Sustiuye el que estaba en LS)
            localStorage.setItem(nombre, JSON.stringify(tmpData));
            isAlmacenado = true;
        } else //si el índice es mayor a -1 singifica que ya está el elemento por lo tanto 
        //no icnluye nada
        //console.log("El valor ya ha sido agregado anteriormente");
        isAlmacenado = false;
    } else {
        //------- Instrucciones si NO encuentra el dato en LS
        //Convierte tmpData a array
        tmpData = [];
        //Inserta el valor:
        tmpData.push(valor);
        //Crea el dato LS por primera vez
        localStorage.setItem(nombre, JSON.stringify(tmpData));
        isAlmacenado = true;
    }
    return isAlmacenado;
}
function $014e23e532da4aa4$export$3988ae62b71be9a3(nombre) {
    //console.log("nombre en obtener", nombre);
    let tmpData = localStorage.getItem(nombre);
    return JSON.parse(tmpData);
}
function $014e23e532da4aa4$export$71aa6c912b956294(nombre, valor) {
    let indice = -1;
    let tmpData = localStorage.getItem(nombre);
    if (tmpData) {
        tmpData = JSON.parse(tmpData);
        indice = tmpData.indexOf(valor);
    }
    return indice;
}
function $014e23e532da4aa4$export$1d2f21e549771e67(nombre, valor) {
    let tmpData = localStorage.getItem(nombre);
    let isEliminado = false;
    if (tmpData) {
        tmpData = JSON.parse(tmpData);
        const indice = tmpData.indexOf(valor);
        //console.log("tmpData",tmpData);
        //console.log("indice del LS", indice);        
        tmpData.splice(indice, 1);
        //console.log("tmpData después del splice", tmpData);
        localStorage.setItem(nombre, JSON.stringify(tmpData));
        isEliminado = true;
    }
    return isEliminado;
}


function $2a57b48577f321ae$export$9a8aaeeffc69f727(array, llave, valor) {
    valor = valor.toString();
    let tmpData = [];
    //console.log("*********Filtro por criterio llave", llave);    
    //console.log("******Valor de la llave", valor );        
    //console.log("aaray recibido para filtrar", array);            
    if (array.length > 0) {
        const limite = array.length;
        for(let index = 0; index < limite; index++)//console.log( array[index][ llave ] );
        if (array[index][llave] === valor) tmpData.push(array[index]);
    }
    //console.log("Arreglo retornado", tmpData);    
    return tmpData;
}
function $2a57b48577f321ae$export$6486ede9e74d7d9d(array, id) {
    //console.log("array recibido", array);
    const limite = array.length;
    let item = null;
    id = id.toString();
    //console.log("id recibidia", id);
    for(let index = 0; index < limite; index++)if (array[index].id === id) item = array[index];
    return item;
}


function $a085ac10f3b5e549$export$2e2bcd8739ae039() {
    let p = null;
    if (navigator.userAgent.indexOf("Win") != -1) p = "win";
    if (navigator.userAgent.indexOf("Mac") != -1) p = "mac";
    if (navigator.userAgent.indexOf("Linux") != -1) p = "linux";
    if (navigator.userAgent.indexOf("Android") != -1) p = "android";
    if (navigator.userAgent.indexOf("like Mac") != -1) p = "ios";
    return p;
}


function $6416adddcd9ec1cd$export$2e2bcd8739ae039(param, mode) {
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
    let day = arrayDate[2];
    let month = arrayDate[1];
    let year = arrayDate[0];
    if (mode === "text") newDate = `${day} ${months[parseInt(month) - 1]}. ${year}`;
    else newDate = `${day}/${month}/${year}`;
    return newDate;
}


async function $cf838c15c8b009ba$export$7a171f172be0782e(url) {
    const res = await $dc97d1b36c8aca73$export$7a171f172be0782e(url);
    return res;
}
async function $cf838c15c8b009ba$export$c48ca2d5cde02408(url, data, method) {
    const res = await $dc97d1b36c8aca73$export$c48ca2d5cde02408(url, data, method);
    return res;
}
async function $cf838c15c8b009ba$export$e7cdd9ab52da88de(url, items, method) {
    const res = await $dc97d1b36c8aca73$export$e7cdd9ab52da88de(url, items, method);
    return res;
}
function $cf838c15c8b009ba$export$6d6465f628c4526c(word, array, field) {
    return $90129c1403635530$export$2e2bcd8739ae039(word, array, field);
}
function $cf838c15c8b009ba$export$883228a582a7567d(opt) {
    return $89f400bd40e47310$export$2e2bcd8739ae039(opt);
}
function $cf838c15c8b009ba$export$7612a94c1a807b07(name, value) {
    return $014e23e532da4aa4$export$27a48efc044c200a(name, value);
}
function $cf838c15c8b009ba$export$6d7e19b0145ae9a9(name) {
    return $014e23e532da4aa4$export$3988ae62b71be9a3(name);
}
function $cf838c15c8b009ba$export$65b1cf01642ad2d3(name, value) {
    return $014e23e532da4aa4$export$71aa6c912b956294(name, value);
}
function $cf838c15c8b009ba$export$8575956c0926f910(name, value) {
    return $014e23e532da4aa4$export$1d2f21e549771e67(name, value);
}
function $cf838c15c8b009ba$export$bd32440021b751cb(array, id) {
    const res = $2a57b48577f321ae$export$6486ede9e74d7d9d(array, id);
    return res;
}
function $cf838c15c8b009ba$export$ef554b3624535d65(array, key, word) {
    const res = $2a57b48577f321ae$export$9a8aaeeffc69f727(array, key, word);
    return res;
}
function $cf838c15c8b009ba$export$722a64dea1b767dc() {
    return $a085ac10f3b5e549$export$2e2bcd8739ae039();
}
function $cf838c15c8b009ba$export$4f5023c7b7c4a669(date, mode) {
    return $6416adddcd9ec1cd$export$2e2bcd8739ae039(date, mode);
}


export {$cf838c15c8b009ba$export$7a171f172be0782e as getData, $cf838c15c8b009ba$export$c48ca2d5cde02408 as sendData, $cf838c15c8b009ba$export$e7cdd9ab52da88de as sendFormData, $cf838c15c8b009ba$export$6d6465f628c4526c as searchTags, $cf838c15c8b009ba$export$883228a582a7567d as getToday, $cf838c15c8b009ba$export$7612a94c1a807b07 as stIns, $cf838c15c8b009ba$export$6d7e19b0145ae9a9 as stGet, $cf838c15c8b009ba$export$65b1cf01642ad2d3 as stFind, $cf838c15c8b009ba$export$8575956c0926f910 as stDel, $cf838c15c8b009ba$export$bd32440021b751cb as arrayFindById, $cf838c15c8b009ba$export$ef554b3624535d65 as arrayFindByKey, $cf838c15c8b009ba$export$722a64dea1b767dc as platform, $cf838c15c8b009ba$export$4f5023c7b7c4a669 as dateConvert};
//# sourceMappingURL=main.js.map
