const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if (arguments.length === 0 || value === null) {
      this.array.push('null');
    } else {
      this.array.push(value);
    }

    return this;
  },
  removeLink(position) {
    let index = position - 1;
    if (typeof position !== 'number' || position === null || index >= this.array.length || index < 0) {
      this.array = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    this.array.splice(index, 1);
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let str = '( ';
    try {
      console.log(this.array)
      for (let i = 0; i < this.array.length; i++) {
        if (i !== this.array.length - 1) {
          console.log(this.array[i])
          str += `${this.array[i]} )~~( `;
        }
        else {
          str += `${this.array[i]} )`;
        }
      }
    }
    catch { }
    this.array = [];
    console.log(str)
    return str;
  }

};

module.exports = {
  chainMaker
};
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(1).reverseChain().finishChain();
// chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain();
// chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain();
//( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )
