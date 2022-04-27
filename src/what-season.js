const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }
    if ( (date instanceof Date) === false || Object.getOwnPropertySymbols(date).length !==0) {
    throw new Error("Invalid date!");
  }
  // let checkDate = Date.parse(date);
  let arraySeasons = ['winter', 'spring', 'summer', 'autumn'];
  let mounth = date.getMonth();
  
  if (mounth === 11 || mounth === 0 || mounth === 1) {
    console.log(arraySeasons[0])
    return arraySeasons[0];
  }
  if (mounth > 1 && mounth <= 4) {
    console.log(arraySeasons[1])
    return arraySeasons[1];
  }
  if (mounth > 4 && mounth <= 7) {
    console.log(arraySeasons[2])
    return arraySeasons[2];
  }
  if (mounth > 7 && mounth <= 10) {
    console.log(arraySeasons[3])
    return arraySeasons[3];
  }
}

module.exports = {
  getSeason
};
