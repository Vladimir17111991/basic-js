const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let number = 0;
  if(matrix.length === 0){
    return 0;
  }
  // console.log(matrix.length)
  let columnCount = matrix[0].length;
  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === '^^') {
        number++;
      }
    }
  }
  if (number === 0) { return 0; }
  else {
    // console.log(number)
    return number;
  }

}

module.exports = {
  countCats
};