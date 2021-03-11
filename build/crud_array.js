exports.eliminar = function (id, array) {  
  //console.log("id desde crud", id);
  //console.log("array desde crud", array);  
  let eliminado=null;

  for (let index = 0; index < array.length; index++) {
    if (id === array[index].id ) {
      //console.log("Posicion", index, "objeto a eliminar", array[index] );      
    eliminado = array.splice(index, 1 )
    }    
  }
  
  return eliminado;
}