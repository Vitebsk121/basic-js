const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const optionsOfDefault = {
    repeatTimes: 0,
    separator: '+',
    addition: '',
    additionRepeatTimes: 0,
    additionSeparator: '|'
  }
  for (const [key, value] of Object.entries(options)) {
    optionsOfDefault[key] = String(value);
  }
  const arrStr = Array(options.repeatTimes).fill(String(str));
  const strAddition = Array(options.additionRepeatTimes).fill(optionsOfDefault.addition).join(`${optionsOfDefault.additionSeparator}`);
  return arrStr.join(`${strAddition}${optionsOfDefault.separator}`) + strAddition;
};