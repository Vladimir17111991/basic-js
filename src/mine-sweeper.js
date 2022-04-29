const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let array = [];

  for (let i = 0; i < matrix.length; i++) {
    let arr = [];
    for (let j = 0; j < matrix[i].length; j++) {
      arr.push(0);
    }
    array.push(arr);
  }



  // for (let i in matrix.length) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        //тек.ряд
        if (matrix[0][j - 1] === true) { array[i][j] += 1; }
        if (matrix[0][j + 1] === true) { array[i][j] += 1; }
        //нижний ряд
        if (matrix[1][j - 1] === true) { array[i][j] += 1; }
        if (matrix[1][j + 1] === true) { array[i][j] += 1; }
        if (matrix[1][j] === true) { array[i][j] += 1; }
      }
      else if (i === matrix.length - 1) {
        //верхний ряд
        if (matrix[i - 1][j - 1] === true) { array[i][j] += 1; }
        if (matrix[i - 1][j + 1] === true) { array[i][j] += 1; }
        if (matrix[i - 1][j] === true) { array[i][j] += 1; }

        //текущий ряд
        if (matrix[i][j - 1] === true) { array[i][j] += 1; }
        if (matrix[i][j + 1] === true) { array[i][j] += 1; }
        // if (matrix[i][j] === true) { array[i][j] += 1; }
      }
      else {
        //верхний ряд
        if (matrix[i - 1][j - 1] === true) { array[i][j] += 1; }
        if (matrix[i - 1][j] === true) { array[i][j] += 1; }
        if (matrix[i - 1][j + 1] === true) { array[i][j] += 1; }
        //тек. ряд
        if (matrix[i][j + 1] === true) { array[i][j] += 1; }
        if (matrix[i][j - 1] === true) { array[i][j] += 1; }
        // if(matrix[i][j] === true){ array[i][j] +=1;}

        //нижний ряд
        if (matrix[i + 1][j - 1] === true) { array[i][j] += 1; }
        if (matrix[i + 1][j + 1] === true) { array[i][j] += 1; }
        if (matrix[i + 1][j] === true) { array[i][j] += 1; }
      }
    }
  }
  // for (let j in matrix[0].length) {
  // let rev = -matrix[i][j];
  // console.log(rev)
  // for (let x in arr) {
  //   for (let y in arr) {
  //     if (0 <= i + x < matrix.length && 0 <= j + y < matrix[0].length) {

  //       rev += matrix[i + x][j + y];
  //     }
  // array[i].push(rev);

  // console.log(matrix)
  // console.log(array)
  return array;
}


module.exports = {
  minesweeper
};

// minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ]);

/*
 *[
*   [1, 2, 1],
*   [2, 1, 1],
*   [1, 1, 1],
* ]
 */


minesweeper([
  [false, false, false],
  [false, false, false],
]);
/*[
  [0, 0, 0],
  [0, 0, 0],
]
*/