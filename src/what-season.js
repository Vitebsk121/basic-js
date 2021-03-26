const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!';
  }
  let month = date.getMonth();
  (month == 11 || month == 0 || month == 1) ? result = 'winter' :
  (month == 2 || month == 3 || month == 4) ? result = 'spring' :
  (month == 5 || month == 6 || month == 7) ? result = 'summer' :
  (month == 8 || month == 9 || month == 10) ? result = 'autumn' :
  result = 0;
  date.toLocaleString();
  return result;
};
