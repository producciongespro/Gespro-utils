import * as akiri from "./akiri.js";
import smartSearchTags from "./smart-search-tags.js";


export async function getData(url) {
    const res = await  akiri.getData(url);    
    return res;
}

export async function sendData(url, data, method) {
    const res = await akiri.sendData(url, data, method)
    return res;
}

export function searchTags (word, array, field) {
    return smartSearchTags (word, array, field );
}

