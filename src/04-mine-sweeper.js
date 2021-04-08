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
function minesweeper(m) {
  const returnM = JSON.parse(JSON.stringify(m));
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[0].length; j++) {
      if (m[i][j] === true) {
        returnM[i][j] = 1;
      } else {
        let counter = 0;
        if (i - 1 >= 0 && j - 1 >= 0 && m[i - 1][j - 1] === true) {
          counter++;
        }
        if (i - 1 >= 0 && m[i - 1][j] === true) {
          counter++;
        }
        if (i - 1 >= 0 && j + 1 < m[0].length && m[i - 1][j + 1] === true) {
          counter++;
        }
        if (j + 1 < m[0].length && m[i][j + 1] === true) {
          counter++;
        }
        if (i + 1 < m.length && j + 1 < m[0].length && m[i + 1][j + 1] === true) {
          counter++;
        }
        if (j - 1 >= 0 && m[i][j - 1] === true) {
          counter++;
        }
        if (i + 1 < m.length && j - 1 >= 0 && m[i + 1][j - 1] === true) {
          counter++;
        }
        if (i + 1 < m.length && m[i + 1][j] === true) {
          counter++;
        }
        returnM[i][j] = counter;
      }
    }
  }
  return returnM;
}

module.exports = minesweeper;

// let matrix = [
// [true, false, false],
// [false, true, false],
// [false, false, false]
// ]

// console.log(minesweeper(matrix));
