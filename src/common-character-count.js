const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  // remove line with error and write your code here
  let count = 0;
  s1 = s1.split('');
  s2 = s2.split('');
  for(let i =0; i < s1.length; i++){
    if(s2.includes(s1[i])){
      let index = s2.indexOf(s1[i]);
      console.log(index)
     
      // s2 = s2.slice(index,1);
     s2.splice(index,1);
      count++;
    }
  }
  // console.log(count)
  return count;
}

module.exports = {
  getCommonCharacterCount
};
getCommonCharacterCount('aabcc', 'adcaa'), 3;
// getCommonCharacterCount('zzzz', 'zzzzzzz'), 4;
// getCommonCharacterCount('abca', 'xyzbac'), 3;
// getCommonCharacterCount('', 'abc'), 0;
// getCommonCharacterCount('a', 'b'), 0;