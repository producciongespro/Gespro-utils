export default function _searchTags(word, array, field ) {
  let tmpArray = [];

  //si la variable campo está vacía se agrega "tags" por defecto
  if (!field) {
    field = "tags"
  }

  word = word.toLowerCase();
  word = eliminarTildes(word);
  //console.log("word ingresada:", word);
  const patt = new RegExp(word);  

  array.forEach((item) => {
    let str =  eliminarTildes (item[field]);
    str = str.toLowerCase();
    const res = patt.test(str);
    if (res) {
      tmpArray.push(item);
    }
  }); 
  return tmpArray;
}

const eliminarTildes = (cadena) => {
  //console.log("cadena:",cadena);
  let tmpCadena = cadena.replace(/á/g, "a");
  tmpCadena = tmpCadena.replace(/é/g, "e");
  tmpCadena = tmpCadena.replace(/í/g, "i");
  tmpCadena = tmpCadena.replace(/ó/g, "o");
  tmpCadena = tmpCadena.replace(/ú/g, "u");
  //console.log("tmpCadena",tmpCadena);
  return tmpCadena;
};
