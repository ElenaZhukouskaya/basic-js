const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const resultArr = matrix.map((el) => el.map((e) => 0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      //существование верхнего ряда:
      //верхний элемент:
      if (matrix[i - 1] && matrix[i - 1][j]) {
        resultArr[i][j] += 1;
      }
      //верхний элемент по правой диагонали:
      if (matrix[i - 1] && matrix[i - 1][j + 1]) {
        resultArr[i][j] += 1;
      }
      //верхний элемент по левой диагонали:
      if (matrix[i - 1] && matrix[i - 1][j - 1]) {
        resultArr[i][j] += 1;
      }
      // существование нижнего ряда:
      //нижний элемент:
      if (matrix[i + 1] && matrix[i + 1][j]) {
        resultArr[i][j] += 1;
      }
      //нижний элемент по правой диагонали:
      if (matrix[i + 1] && matrix[i + 1][j + 1]) {
        resultArr[i][j] += 1;
      }
      //нижний элемент по левой диагонали:
      if (matrix[i + 1] && matrix[i + 1][j - 1]) {
        resultArr[i][j] += 1;
      }
      //соседние элементы по ряду:
      if (matrix[i] && matrix[i][j - 1]) {
        resultArr[i][j] += 1;
      }
      if (matrix[i] && matrix[i][j + 1]) {
        resultArr[i][j] += 1;
      }
    }
  }
  return resultArr;
}

module.exports = {
  minesweeper,
};
