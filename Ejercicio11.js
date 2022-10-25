function splitArrayIntoChunks(arr, nDivi) {

    let arrComplete = [];
    let arrSplit = [];
    let divi = Math.floor(arr.length/nDivi);
    for (let i = 0; i < arr.length; i++) { //Recorro el array
      arrSplit.push(arr[i]);//Meto los datos de el array en uno nuevo para guardarlos

      if (arrSplit.length === nDivi) {//Si los datos del nuevo array contiene la misma longitud que el 2 parametro
        arrComplete.push(arrSplit);//Introduzco los nuevos datos dentro del arrayComplete.
        arrSplit = [];//Vuelvo a dejar el array vacio
      } else if (arrComplete.length === divi) { //Si la logitud de el arrayComplete es igual a el numero del 2 parametro
        arrComplete.push(arrSplit);//pusheo los datos divididos al arrayComplete.
      }
    }
    return arrComplete;//Devuelvo el nuevo array
  }

  
  const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
  console.log(result); //[[1,2,3],[4,5,6],[7]]