export function get_R2(x: Array<number>, y: Array<number>) {
    let arrX = x;
    let arrY = y;
    let rxy = x[2];
    let r2 = 0;
    let sumX = 0;
    let sumX2 = 0;
    let sumY = 0;
    let sumY2 = 0;
    let sumXY = 0;

    for (let i = 0; i < arrX.length; i++) {
        sumX = sumX + arrX[i];
        sumX2 = sumX2 + (arrX[i] * arrX[i])
    }
    for (let i = 0; i < arrY.length; i++) {
        sumY = sumY + arrY[i];
        sumY2 = sumY2 + (arrY[i] * arrY[i])
    }
    for (let i = 0; i < arrX.length; i++) {
        sumXY = sumXY + (arrX[i] * arrY[i]);
    }

    rxy = Math.round((((arrX.length) * (sumXY)) - ((sumX) * (sumY))) / (Math.round((Math.sqrt((((arrX.length) * (sumX2)) - (sumX * sumX)) * (((arrY.length) * (sumY2)) - (sumY * sumY)))) * 100) / 100) * 10000) / 10000;

    r2 = Math.round((rxy * rxy) * 10000) / 10000;

    return r2;
}