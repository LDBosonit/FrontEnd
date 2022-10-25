
const arrNames = [
    { id: 1, name: "Pepe" },
    { id: 2, name: "Juan" },
    { id: 3, name: "Alba" },
    { id: 4, name: "Toby" },
    { id: 5, name: "Lala" },
  ];


  function arr(){
    let result = arrNames.filter(arrName => arrName.id === 3);
    return result;
  }
  console.log(arr());
    