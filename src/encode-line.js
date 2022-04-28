const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let strNew = '';
  str = str.split('');

  for (let i = 0; i < str.length;i++) {
    // if(str.length > 0){
    let count = 0;
    let pos = str[0];
    // console.log(str[i] + " - " + str[i+1])
    // while(str[0] == str[str.length - (str.length-1)] ){
      while(str[0] === pos){
      str.shift();
      count++;
    }
    strNew += (count !== 1) ? count + pos : pos;
    // console.log(str)
    if(str.length === 1){
      strNew+=str;
    }
    // i++;
    // console.log(count)
  }
  // console.log(strNew + "  -  " + str)
  console.log(strNew)
  return strNew;
}

module.exports = {
  encodeLine
};
// encodeLine('aaaatttt');   // '4a4t'
encodeLine('abbcca');   // 'a2b2ca'