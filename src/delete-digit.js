const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n)  {
  let array = [];
  for(let i = 0; i < n.toString().length;i++){
    let str = n.toString();
    str = str.replace(str[i], "");
    array.push(parseInt(str))
  }
  // console.log(Math.max.apply(null,array))
  return Math.max.apply(null,array);
}

module.exports = {
  deleteDigit
};
deleteDigit(222219); //22229