const arrCities = [
  { city: "Logroño", country: "Spain", capital: false},
  { city: "Paris", country: "France", capital: true},
  { city: "Madrid", country: "Spain", capital: true },
  { city: "Rome", country: "Italy", capital: true },
  { city: "Oslo", country: "Norway", capital: true },
  { city: "Jaén", country: "Spain", capital: false },
];

function cities(){

  const nuevoArr = []
  const filtro = arrCities.map((obj) =>({obj:obj.city, isSpain: !obj.capital }),function(element){
    return `${element.city}${element.isSpain}`;
  })
  nuevoArr.push(filtro);
  
  return nuevoArr;
}
console.log(cities());

/*function cities() {
  let result = arrCities2.filter(
    (arrCitie) => arrCitie.isSpain === "true" && arrCitie.capital === false
  );
  return result;
}*/


