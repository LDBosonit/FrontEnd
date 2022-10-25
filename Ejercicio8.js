function fromBytesToFormattedSizeUnits(nbytes, precision = 3) {
    let num = [];
    let format = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    //for (let i = 0; i < nbytes.length; i++) {
      do {
        nbytes = nbytes / 1000;
        num++;
      } while (nbytes > 1000 || nbytes < -1000){
        if (format[num] === undefined) {
          return "Valor no definido";
        }
      }
    //}
    return nbytes.toPrecision(precision) + format[num];
  }
  /*do{
      nbytes = nbytes / 1000;
      num ++;
    }
    while(nbytes > 1000 || nbytes < 1000){
      if (format[num] === undefined) {
        return "Valor no definido";
      }
    }
    return nbytes.toPrecision(precision) + format[num];*/

  /*if (nbytes / 1000) {
      format++;
    }
    if(nbytes > 1000 || nbytes < 1000) {
      if (format[num] === undefined) {
        return "Valor no definido";
      }
    }
    return nbytes.toPrecision(precision) + format[num];
  }*/
  

  const result = fromBytesToFormattedSizeUnits(1000);
  console.log(result); // 1KB
  const result2 = fromBytesToFormattedSizeUnits(123456769);
  console.log(result2); // 123MB
  const result3 = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
  console.log(result3); // -12.145GB