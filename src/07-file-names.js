/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arr) {
  const counter = {};
  for (let i = 0; i < arr.length; i++) {
    if (!counter[arr[i]]) {
      counter[arr[i]] = 1;
      // eslint-disable-next-line no-param-reassign
      if (arr.indexOf(arr[i]) !== -1 && arr.indexOf(arr[i]) < i) arr[i] = `${arr[i]}(1)`;
    } else {
      counter[arr[i]] += 1;
      // eslint-disable-next-line no-param-reassign
      arr[i] = `${arr[i]}(${counter[arr[i]] - 1})`;
    }
  }
  return arr;
}

module.exports = renameFiles;
// renameFiles(['file', 'file', 'image', 'file(1)', 'file']);
