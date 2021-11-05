import * as akiri from "./akiri.js";
import _searchTags from "./search-tags.js";
import _getToday from "./get-today.js";
import {ins, get, find, del} from "./storage.js";


export async function getData(url) {
    const res = await  akiri.getData(url);    
    return res;
}

export async function sendData(url, data, method) {
    const res = await akiri.sendData(url, data, method)
    return res;
}

export function searchTags (word, array, field) {
    return _searchTags (word, array, field );
}

export function getToday (opt) {
    return _getToday(opt)
}


export function stIns(name, value) {      
    return ins(name, value );
}

export function stGet(name) {
    return get(name);
}

export function stFind(name, value) {
    return find(name, value)    
}

export function stDel(name, value) {
    return del(name, value);    
}



