const betaOne = (x: number[], y: number[]) => {
    // xy: number[]
    var xy = [];
    for (var i = 0; i < x.length; i++) {
      xy.push(x[i] * y[i]);
    }
    // x2
    var x2 = [];
    for (var j = 0; j < x.length; j++) {
      x2.push(x[j] * x[j]);
    }
    // promedio x
    var promX = 0;
    for (var k = 0; k < x.length; k++) {
      promX += x[k];
    }
    promX = promX / x.length;
    // promedio y
    var promY = 0;
    for (var l = 0; l < y.length; l++) {
      promY += y[l];
    }
    promY = promY / y.length;
    // sumXY
    var sumXY = 0;
    for (var m = 0; m < xy.length; m++) {
      sumXY += xy[m];
    }
    // sumX2
    var sumX2 = 0;
    for (var n = 0; n < x2.length; n++) {
      sumX2 += x2[n];
    }
    // ecuacion
    var b1 =
      (sumXY - x.length * promX * promY) / (sumX2 - x.length * promX * promX);
    return Math.round(b1 * 100000) / 100000;
  };
  
  const betaZero = (x: number[], y: number[], b1: number) => {
    // promedio y
    var promY = 0;
    for (var l = 0; l < y.length; l++) {
      promY += y[l];
    }
    promY = promY / y.length;
    // promedio x
    var promX = 0;
    for (var k = 0; k < x.length; k++) {
      promX += x[k];
    }
    promX = promX / x.length;
    // ecuacion
    var b0 = promY - b1 * promX;
    return Math.round(b0 * 100) / 100;
  };
  
  const computeY = (b1: number, b0: number, x: number) => {
    // ecuacion
    var y = b1 * x + b0;
    return Math.round(y * 1000) / 1000;
  };
  
  export { betaOne, betaZero, computeY };
  