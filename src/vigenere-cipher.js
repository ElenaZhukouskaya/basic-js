const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(type = true) {
    this.type = type;
  }
  vigenere(message, key, type) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let resultArr = [];
    const alphabetSize = "Z".charCodeAt(0) - "A".charCodeAt(0) + 1; //26
    const startLetter = "A".charCodeAt(0); //65
    const endLetter = "Z".charCodeAt(0); //90
    let textOffset = 0;
    for (let i = 0; i < message.length; i++) {
      if (
        message.charCodeAt(i) < startLetter ||
        message.charCodeAt(i) > endLetter
      ) {
        resultArr.push(message[i]);
      } else {
        if (type) {
          let j = String.fromCharCode(
            ((message[i].charCodeAt(0) -
              startLetter +
              key.charCodeAt(textOffset++ % key.length) -
              startLetter) %
              alphabetSize) +
              startLetter
          );
          resultArr.push(j);
        } else {
          let k = String.fromCharCode(
            ((message[i].charCodeAt(0) -
              key.charCodeAt(textOffset++ % key.length) +
              alphabetSize) %
              alphabetSize) +
              startLetter
          );

          resultArr.push(k);
        }
      }
    }
    return this.type ? resultArr.join("") : resultArr.reverse().join("");
  }
  encrypt(message, key) {
    return this.vigenere(message, key, true);
  }
  decrypt(message, key) {
    return this.vigenere(message, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
