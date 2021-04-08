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
  let maxNumber = 0;
  let numberInString = String(n).split('');
  for (let i = 0; i < numberInString.length; i++) {
    numberInString.splice(i, 1);
    if (Number(numberInString.join('')) > maxNumber) maxNumber = Number(numberInString.join(''));
    // eslint-disable-next-line no-const-assign
    numberInString = String(n).split('');
  }
  return maxNumber;
}

module.exports = deleteDigit;
