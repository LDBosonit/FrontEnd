function returnFalsyValues(obj, func) {
    for (const key in obj) { //Recorro los objetos
      const element = obj[key]; //Guardo en una variable el objeto
      if (func(element)) { //Si la funcion contiene el objeto, me elimina el objeto
        delete obj[key];//elimino la key 
      }
    }
    return obj; //Devuelve el resultado con el objeto eliminado
  }
  
  const result = returnFalsyValues({ a: 1, b: "2", c: 3 },(x) => typeof x === "string");

  console.log(result); //{a: 1, c: 3}