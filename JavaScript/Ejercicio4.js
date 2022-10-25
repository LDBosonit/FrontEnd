const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

function equalArr() {
  const arrNumber1 = [1, 2, 3];
  const arrNumber2 = [1, 2, 3, 4, 5];
  const arrNumber3 = [1, 4, 7, 2];

  const arr = arrNumber1.filter(val=>arrNumber2.includes(val) && arrNumber3.includes(val));
  return arr;

}
console.log(equalArr());
