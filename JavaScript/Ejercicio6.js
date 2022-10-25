function roundTo(numx, deci) {
    let zero = 1;
    for (let i = 0; i < deci; i++) {
      zero *= 10;
    }
    return Math.round(numx * zero) / zero; // Dividir entre tantos zeros se especifique en los decimales
  }

  const roundedResult = roundTo(2.123, 2);
  console.log(roundedResult); // 2.12
  const roundedResult2 = roundTo(1.123456789, 6);
  console.log(roundedResult2); // 1.123457