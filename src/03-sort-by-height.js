/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      tempArr.push(arr[i]);
      // eslint-disable-next-line no-param-reassign
      arr[i] = 'x';
    }
  }
  tempArr = tempArr.sort((a, b) => a - b);
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'x') {
      // eslint-disable-next-line no-param-reassign
      arr[i] = tempArr[counter];
      counter++;
    }
  }
  return arr;
}

module.exports = sortByHeight;
