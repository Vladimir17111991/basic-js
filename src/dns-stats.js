const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let obj ={};
    for(let i =0; i < domains.length; i++){
      let str = '';
      let array = domains[i].split('.');
      for(let j = array.length - 1; j >= 0; j--)
      {
        str += '.' + array[j];
        // console.log(domains[i][j])
        (!!!obj[str]) ? obj[str] = 0 : obj[str] = 1;
        obj[str]++;
      }
    }
    console.log(obj)
   return obj;
  }
  
  module.exports = {
    getDNSStats
  };
  getDNSStats(['epam.com', 'info.epam.com']); // { '.com': 2, '.com.epam': 2, '.com.epam.info': 1 }