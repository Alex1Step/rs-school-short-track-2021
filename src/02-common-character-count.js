/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrayOfS2 = s2.split('');
  const arrayOfS1 = s1.split('');
  const counter = arrayOfS1.reduce((r, el) => {
    if (arrayOfS2.includes(el)) {
      arrayOfS2.splice(arrayOfS2.indexOf(el), 1);
      // eslint-disable-next-line no-param-reassign
      r += 1;
    }
    return r;
  }, 0);
  return counter;
}

module.exports = getCommonCharacterCount;
