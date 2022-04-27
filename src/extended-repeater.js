const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { 
 * repeatTimes: 3, 
 * separator: '**', 
 * addition: 'PLUS', 
 * additionRepeatTimes: 3, 
 * additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newString = '';
  str = String(str);
  // options.addition = String(options.addition);
  let addition = options.hasOwnProperty('addition') ? ('' + options.addition) : '';
  options.additionSeparator = (!!options.additionSeparator) ?  options.additionSeparator : '|';
  options.repeatTimes = (!!options.repeatTimes) ?  options.repeatTimes : 1;
  options.additionRepeatTimes = (!!options.additionRepeatTimes) ?  options.additionRepeatTimes : 1;
  options.separator = (!!options.separator) ?  options.separator : '+';

  for (let i = 1; i <= options.repeatTimes; i++) {
    newString += str;
    for (let j = 1; j <= options.additionRepeatTimes; j++) {
      
      if(addition !=='')
      {
        // console.log(addition )
        newString += addition;
        if(j !== options.additionRepeatTimes)
        {
          newString += options.additionSeparator;
        }
      } 
    }
    if (i !== options.repeatTimes) {
      newString += options.separator;
    }
  }
  console.log(newString)
  return newString;
}

module.exports = {
  repeater
};
// repeater('la', { repeatTimes: 3 });// 'la+la+la'
// repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 });    //'la+sla+sla+'