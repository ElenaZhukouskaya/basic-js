const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let arrNumbers = [];
  let str = n.toString();
  let arrStr = [...str];

  if (arrStr[arrStr.length - 1] == 0) {
    arrStr.pop();
  }

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] < arrStr[i + 1]) {
      arrStr.slice(i, arrStr.length - 1);
    } else {
      arrNumbers.push(arrStr[i]);
    }
  }

  return +arrNumbers.join("");
}

module.exports = {
  deleteDigit,
};
