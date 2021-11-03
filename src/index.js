import * as akiri from "./akiri.js";


export async function getData(url) {
    const res = await  akiri.getData(url);    
    return res;
}