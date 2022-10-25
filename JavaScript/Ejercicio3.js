const arrCities = [
    { city: 'Logroño', country: 'Spain', capital: false },
    { city: 'Paris', country: 'France', capital: true },
    { city: 'Madrid', country: 'Spain', capital: true },
    { city: 'Rome', country: 'Italy', capital: true },
    { city: 'Oslo', country: 'Norway', capital: true },
    { city: 'Jaén', country: 'Spain', capital: false },
  ]

  function cities(){
    let result = arrCities.filter(arrCitie => arrCitie.country === "Spain" && arrCitie.capital === false);
    return result;
  }
  console.log(cities());

 