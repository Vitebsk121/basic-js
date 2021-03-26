const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const arrFlat = matrix.flat();
  const result = arrFlat.filter((item) => item === '^^');
  return result.length;
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
