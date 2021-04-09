/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(list, k) {
  let currNode = list;
  while (currNode) {
    if (currNode.value === k) {
      currNode.value = currNode.next.value;
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }
  }
  // while (list) {
  //   // eslint-disable-next-line no-console
  //   console.log(list.value, list.next);
  //   // eslint-disable-next-line no-param-reassign
  //   list = list.next;
  // }
  return list;
}

module.exports = removeKFromList;
