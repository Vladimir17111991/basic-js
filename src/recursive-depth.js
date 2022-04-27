const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    if (!Array.isArray(arr)) { return 1; }
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          // count += this.calculateDepth(arr[i].flat());
          // count += this.calculateDepth(arr.flat(count));
          if (arr[i] <= arr[arr.length - 1]) {
        count += this.calculateDepth(arr.flat());
          break;
        }
      }
    }
    return count;
  }
}

module.exports = {
  DepthCalculator
};
const depthCalc = new DepthCalculator();
// console.log(depthCalc.calculateDepth([1, 2, 3, [1], 4, 5, [1]])) // 2
// console.log(depthCalc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]])) //8
console.log(depthCalc.calculateDepth([[[[[[[[[[]]]]]]]]]])) //10