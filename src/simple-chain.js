const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  finish: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`)
    return this;
  },
  removeLink(position) {
    if(typeof position !== 'number') {
      this.arr = [];
      throw Error;
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    this.finish = this.arr.join('~~');
    this.arr = [];
    return this.finish;
  }
};
module.exports = chainMaker;
