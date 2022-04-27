const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  let arrayTransform = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      if (i !== arr.length - 1) {
        i = i + 2;
      }
      continue;
    }
    if (arr[i] === '--discard-prev') {
      if (arrayTransform.length !== 0 || arrayTransform.includes(arr[i] - 1)) {
        arrayTransform.pop();
      }
      continue;
    }
    if (arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        // arr[i] = arr[i + 1];
        arrayTransform.push(arr[i + 1]);
      }
      continue;
    }
    if (arr[i] === '--double-prev') {
      if (arrayTransform.length !== 0 || arrayTransform.includes(arr[i] - 1)) {
        // arr[i] = arr[i - 1];
        // arrayTransform.push(arr[i]);
        arrayTransform.push(arrayTransform[arrayTransform.length - 1])
      }
      continue;
    }
    arrayTransform.push(arr[i]);
  }
  console.log(arrayTransform);
  return arrayTransform;
}

module.exports = {
  transform
};
// transform([1, 2, 3, '--discard-next', 4, 5]) // [1, 2, 3, 5]
// transform([1, 2, 3, '--discard-prev', 4, 5]) // [1, 2, 4, 5]
// transform([1, 2, 3, '--double-next', 4, 5]) // [1, 2, 3, 4, 4, 5]
// transform([1, 2, 3, '--double-prev', 4, 5]) // [1, 2, 3, 3, 4, 5]
// transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]) // [1, 2, 3, 4, 5]
// transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]) // [1, 2, 3, 1337, 1337, 1337, 4, 5]
// transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]) // [1, 2, 3, 1337, 4, 5]