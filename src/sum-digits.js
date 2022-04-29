const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  let str = '' + n;
  console.log(str);
  while(str.length > 1){
    let array = str.split('');
    let summa = 0;
    console.log(array);
    for(let i = 0; i < array.length; i++){
     summa += parseInt(array[i]); 
    }
    str = '' + summa;
    console.log(summa);
  }
  console.log(str);
 return parseInt(str);
  
 }
 
 module.exports = {
   getSumOfDigits
 };
 // getSumOfDigits(123) //6
 getSumOfDigits(99)  //9