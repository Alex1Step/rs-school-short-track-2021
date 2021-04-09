/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let nStr = '';
  let startI = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      nStr = nStr + (i - startI + 1) + str[i];
      startI = i + 1;
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!str[i + 1] && str[i] !== str[i - 1]) {
      nStr = nStr + 1 + str[i];
    }
  }
  return nStr.replace(/1/g, '');
}

module.exports = encodeLine;
