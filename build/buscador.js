
exports.buscar =  function (palabra, array) {    
    let tmpArray=[];
    palabra= palabra.toLowerCase();
    palabra=eliminarTildes(palabra);
    //console.log("palabra ingresada:", palabra);
    const limite= array.length;
    for (let index = 0; index < limite; index++) {
      //Si las estiquetas contienen mayúscula:
      //let str = array[index].tags.toLowerCase();
      let str = array[index].tags;
      //str= eliminarTildes(str);
      const patt = new RegExp(palabra);
      const res = patt.test(str); 
      if (res) {
        tmpArray.push(array[index]);
      }    
    }
    return tmpArray;
  }
  
  const  eliminarTildes=(cadena)=> {
	  //console.log("cadena:",cadena);
    let tmpCadena = cadena.replace(/á/g, "a");
    tmpCadena = tmpCadena.replace(/é/g, "e");    
    tmpCadena = tmpCadena.replace(/í/g, "i");
    tmpCadena = tmpCadena.replace(/ó/g, "o");
    tmpCadena = tmpCadena.replace(/ú/g, "u");
    //console.log("tmpCadena",tmpCadena);   
    return tmpCadena;
  }