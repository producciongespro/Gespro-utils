import * as akiri from "./akiri.js";
import _searchTags from "./search-tags.js";
import _getToday from "./get-today.js";
import { ins, get, find, del } from "./storage.js";

/**
 * ***Get Data:*** Obtiene datos de un servicio REST en formato JSON
 * @param {string} url
 * @returns {JSON} Respuesta del servidor
 */
export async function getData(url) {
  const res = await akiri.getData(url);
  return res;
}

/**
 * ***Send Data:*** Envia datos al servidor en dormato json
 * @param {string} url
 * @param {object} data
 * @param {string} method
 * @returns {JSON} Respuesta del servidor
 */
export async function sendData(url, data, method) {
  const res = await akiri.sendData(url, data, method);
  return res;
}

/**
 * ***send FormData:*** Envia datos de tipo formdata al servidor. Permite envio de archivos.
 * @param {string} url
 * @param {FormData} items
 * @param {string} method
 * @returns {JSON} Respuesta del servidor
 */
export async function sendFormData(url, items, method) {
  const res = await akiri.sendFormData(url, items, method);
  return res;
}

/**
 * ***Search in tags*** Permite buscar una palabra o frase en un determinado campo de un array.
 *
 * Si el campo *"field"* se omite, la función busca en el campo "tags"
 * @param {string} word
 * @param {array} array
 * @param {string} field
 * @returns {array} Arreglo filtrado
 */
export function searchTags(word, array, field) {
  return _searchTags(word, array, field);
}

/**
 * ***get Today´s date:*** Obtiene la fecha actual en diferentes formatos según el parámetro que reciba.
 *
 *  Si el parámetro se omite, devuelve la fecha en formato dd-mm-yy
 * @param {string} opt
 * @returns { string} Fecha actual (hoy)
 * @returns { object} objeto Fecha actual (hoy) (Si recibe como parámetro la cadena "full")
 */
export function getToday(opt) {
  return _getToday(opt);
}

/**
 * ***Storage insert:*** Inserta en localStorage un arreglo, el cual puede contener cadenas de texto,
 * objetos, números o booleanos.
 * @param {string} name
 * @param {any} value
 * @returns {boolean} **isInserted**: Indica con un true si el dato se insertó de forma correcta.
 */
export function stIns(name, value) {
  return ins(name, value);
}

/**
 * ***Storage Get Data:*** Obtiene el arreglo almacenado por el nombre.
 * @param {string} name 
 * @returns {array} arreglo de datos alamcenados en local storage.
 */
export function stGet(name) {
  return get(name);
}

/**
 * ***Storage find element:*** Devuel el índice del elemento buscado. Si no se encuentra el elemento 
 * devuelve un -1
 * @param {string} name 
 * @param {string} value 
 * @returns {number} indice del elemento en el array.
 */
export function stFind(name, value) {
  return find(name, value);
}


/**
 * ***Storage delete:*** Elimina un objeto almacedo en determinado array (name)
 * @param {string} name 
 * @param {string} value 
 * @returns {boolean} retorna ferdadero si realizó la operación de eliminado.
 */
export function stDel(name, value) {
  return del(name, value);
}
