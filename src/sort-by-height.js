const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let arrayNew = [];
  for(let i = 0; i< arr.length; i++){
    (arr[i] > 0) ? arrayNew.push(arr[i]) : 0;
  }
  // console.log(arrayNew);
  arrayNew.sort((a,b) => a-b);
  // console.log(arrayNew);
  let a = arr.reduce((accum, value) => { (value > 0) 
    ? (accum.push(arrayNew[0]),arrayNew.shift()) 
    : accum.push(-1);
 return accum },[]);
  // console.log(a);
return a;
}

module.exports = {
  sortByHeight
};
sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]);    //[1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]