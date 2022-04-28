const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = (type === false) ? type = false : type = true;
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.ALPHABET = ALPHABET;
  }
  encrypt(message, key) {
    if (!!!message || !!!key || typeof message !== 'string' || typeof key !== 'string' || arguments.length !== 2) {
      throw new Error("Incorrect arguments!");
    }

    let upperMessage = message.toUpperCase().split('');
    let upperKey = key.toUpperCase().split('');
    let output = [];
    let j = 0;
    for (let i = 0; i < upperMessage.length; i++) {
      let indexMessage = this.ALPHABET.indexOf(upperMessage[i]);
      if (indexMessage >= 0) {
        let indexKey = this.ALPHABET.indexOf(upperKey[j % upperKey.length]);
        let currentIndex = (indexMessage + indexKey) % 26; // C = (M + K) % 26 
        output.push(this.ALPHABET[currentIndex])
        j++;
        // console.log(indexMessage + ' - ' + indexKey + " - " + j)
      }
      else {
        output.push(upperMessage[i]);
      }
    }
    return this.type ? output.join('') : output.reverse().join('');
  }
  decrypt(message, key) {
    if (!!!message || !!!key || typeof message !== 'string' || typeof key !== 'string' || arguments.length !== 2) {
      throw new Error("Incorrect arguments!");
    }
    let upperMessage = message.toUpperCase().split('');
    let upperKey = key.toUpperCase().split('');
    let output = [];
    let j = 0;
    for (let i = 0; i < upperMessage.length; i++) {
      let indexMessage = this.ALPHABET.indexOf(upperMessage[i]);
      if (indexMessage >= 0) {
        let indexKey = this.ALPHABET.indexOf(upperKey[j % upperKey.length]);
        let messageCurrentIndex = (indexMessage >= indexKey) ? (indexMessage - indexKey) % 26: (indexMessage - indexKey) + 26;
        output.push(this.ALPHABET[(messageCurrentIndex)]);
        j++;
        // console.log(indexMessage + ' - ' + indexKey + " - " + j)
      }
      else {
        output.push(upperMessage[i]);
      }
    }
    return this.type ? output.join('') : output.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
const directMachine = new VigenereCipheringMachine();

const reverseMachine = new VigenereCipheringMachine(false);
directMachine.encrypt('attack at dawn!', 'alphonse'); // 'AEIHQX SX DLLU!';
reverseMachine.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js')  // 'LEARN FRONTEND DEVELOPMENT :)';