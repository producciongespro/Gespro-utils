import * as akiri from "./akiri.js";
import _searchTags from "./search-tags.js";
import _getToday from "./get-today.js";


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


