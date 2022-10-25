const arrCities2 = [
    { city: 'Logroño', country: 'Spain', capital: false, isSpain: 'true' },
    { city: 'Paris', country: 'France', capital: true, isSpain: 'false' },
    { city: 'Madrid', country: 'Spain', capital: true, isSpain: 'true' },
    { city: 'Rome', country: 'Italy', capital: true, isSpain: 'false' },
    { city: 'Oslo', country: 'Norway', capital: true, isSpain: 'false' },
    { city: 'Jaén', country: 'Spain', capital: false, isSpain: 'true' },
  ];

  function cities2(){
    let result = arrCities2.filter(arrCitie => arrCitie.isSpain === "true" && arrCitie.capital === false);
    return result;
}
  console.log(cities2());