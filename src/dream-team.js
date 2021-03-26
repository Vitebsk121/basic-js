const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if(Array.isArray(members)) {
    const arrOfName = members.filter((item) => typeof (item) == 'string');
    const arrOfNameWithoutSpace = arrOfName.map((item) => item.replace(/\s/g, '', ''));
    const arrOfFirstChar = arrOfNameWithoutSpace.map((item) => item.charAt(0).toUpperCase());
    const sortOfChar = arrOfFirstChar.sort().join('');
    return sortOfChar;
    } else {
      return false;
    }
};