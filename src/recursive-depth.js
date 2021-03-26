const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    arr.forEach(item => {                                
      let n = 1;
      if (Array.isArray(item)) {
        n += this.calculateDepth(item);
      }
      if (n > count) {
        count = n;
      }
    });
    return count;
  }
  }