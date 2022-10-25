const arrDirty = [NaN, 0, 5, false, -1, "", undefined, 3, null, "test"];

function truthy(){
    const nArr = arrDirty.filter(Boolean); //Filtro si un valor del array es booleano y si lo es lo elimino directamente.
    return nArr;
}
      
console.log(truthy());