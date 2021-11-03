import * as akiri from "./akiri.js";


export async function getData(url) {
    const res = await  akiri.getData(url);    
    return res;
}

export async function sendData(url, data, method) {
    const res = await akiri.sendData(url, data, method)
    return res;
}