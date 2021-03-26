const CustomError = require("../extensions/custom-error");

const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

class VigenereCipheringMachine {

  constructor(condition) {
    this.condition = condition;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw Error;
    } 

    let arrOfMessage = message.toUpperCase().split('');
    let arrOfKey = key.toUpperCase().split('');
    let result = [];

    for (let i = 0; i < arrOfMessage.length; i++) {
      if(alph.includes(arrOfMessage[i])) {
        if(arrOfKey.length < arrOfMessage.length) {
          arrOfKey.push(arrOfKey[i]);
        } 
        let sum = alph.indexOf(arrOfMessage[i]) + alph.indexOf(arrOfKey[i]);
        if(sum >= alph.length) {
          sum -= alph.length;
        } 
        result.push(alph[sum]);
      } else {
        result.push(arrOfMessage[i]);
        arrOfKey.splice(i, 0, ' ');
      }
    }
    if(this.condition === false) {
      result.reverse();
    }
    return result.join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw Error;
    } 

    let arrOfMessage = message.toUpperCase().split('');
    let arrOfKey = key.toUpperCase().split('');
    let result = [];

    for (let i = 0; i < arrOfMessage.length; i++) {
      if(alph.includes(arrOfMessage[i])) {
        if(arrOfKey.length < arrOfMessage.length) {
          arrOfKey.push(arrOfKey[i]);
        } 
        let sum = alph.indexOf(arrOfMessage[i]) - alph.indexOf(arrOfKey[i]);
        if(sum < 0) {
          sum += alph.length;
        } 
        result.push(alph[sum]);
      } else {
        result.push(arrOfMessage[i]);
        arrOfKey.splice(i, 0, ' ');
      }
    }
    if(this.condition === false) {
      result.reverse();
    }
    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;
