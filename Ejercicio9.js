function toLowercaseKeys(obj) {

    nobj = []; //Creo un nuevo objeto vacio 
    let keys = Object.keys(obj); //Cojo solo las Keys del objeto
    let values = Object.values(obj); //Cojo los valores del objeto
    for (let i = 0; i < keys.length; i++) {//Recorro las llaves del objeto
      nobj[keys[i].toLowerCase()] = values[i];//Añado al objeto nuevo las keys pasandola a lowerCase y 
      //añadiendo los valores que ya teniamos cogidos
      //el = lo que me esta haciendo es igualar cada valor de cada key a su key correspondiente.
    }
    return nobj;
  }

  const myObject = { NamE: "Charles", ADDress: "Home Street" };
  const myObjLowercase = toLowercaseKeys(myObject);
  console.log(myObjLowercase); //{name:'Charles',address:'Home Street'}