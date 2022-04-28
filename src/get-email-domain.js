const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {

  let regex = /@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  let str = email.match(regex);
  // console.log(str[0].slice(1))
  return str[0].slice(1);
}

module.exports = {
  getEmailDomain
};

getEmailDomain('someaddress@yandex.ru'); // 'yandex.ru'

// getEmailDomain('very.unusual.@.unusual.com@usual.com'); // 'usual.com'