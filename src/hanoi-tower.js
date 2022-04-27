const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed ) {
  //Mn = 2^n - 1.
  let countSteps = Math.pow(2, disksNumber) - 1
  console.log(countSteps);
  //t = Mn / s.
  let countSeconds = Math.floor(countSteps / (turnsSpeed / 3600)) ;
  console.log(countSeconds);
  return {
    turns: countSteps, 
    seconds: countSeconds
  };
}

module.exports = {
  calculateHanoi
};
// calculateHanoi(9, 4308);