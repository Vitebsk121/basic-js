const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) {
    throw Error;
  }
  if(arr.length === 0) {
    return arr;
  }
  let result = [];
  for (let i = 0; i < arr.length; i ++) {
    if(arr[i] === '--discard-next') {
      i += 1;
    } else if(arr[i] === '--discard-prev') {
      if(arr[i - 2] !== '--discard-next' && i !== 0) {
        result.pop(arr[i - 1]);
      }
    } else if(arr[i] === '--double-next') {
      if(i !== arr.length - 1) {
        result.push(arr[i +1 ]);
      }
    } else if(arr[i] === '--double-prev') {
      if(arr[i - 2] !== '--discard-next' && i !== 0) {
        result.push(arr[i - 1]);
      }
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
