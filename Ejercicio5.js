const arrCities = [
  { city: "Logroño", country: "Spain", capital: false, isSpain: true },
  { city: "Paris", country: "France", capital: true, isSpain: false },
  { city: "Madrid", country: "Spain", capital: true, isSpain: true },
  { city: "Rome", country: "Italy", capital: true, isSpain: false },
  { city: "Oslo", country: "Norway", capital: true, isSpain: false },
  { city: "Jaén", country: "Spain", capital: false, isSpain: true },
];

function cities(){
  const result = [];

  arrCities.forEach((index) => {
    if (index.capital === false) {
      result.push(index);
    }
  }); 
  return result;
}

/*function cities() {
  let result = arrCities2.filter(
    (arrCitie) => arrCitie.isSpain === "true" && arrCitie.capital === false
  );
  return result;
}*/

console.log(cities());
