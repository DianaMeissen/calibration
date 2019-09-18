export const createMatrix = (x, y) => {
  let circlePointsMatrix = [];
  let randomizer = [];
  // let circlePointsMatrixLength = [x, y];
  const xMinusOne = x - 1;
  const yMinusOne = y - 1;
  const firstPoint = 10;
  let yConst = 0;
  let pointY = firstPoint;

  for (let i = 0; i < y; i++) {
    let xArray = [];
    let xConst = 0;
    pointY += yConst;
    let pointX = firstPoint;

    for (let j = 0; j < x; j++) {
      randomizer.push(`${i},${j}`);
      pointX += xConst;
      xArray.push(`${Math.round(pointY)},${Math.round(pointX)}`);
      xConst = 80 / xMinusOne;
    }

    yConst = 80 / yMinusOne;
    circlePointsMatrix.push(xArray);
  }
  // return { circlePointsMatrix, circlePointsMatrixLength, randomizer };
  return { circlePointsMatrix, randomizer };
}