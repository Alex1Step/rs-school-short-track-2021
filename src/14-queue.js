const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(elem) {
    const newNode = new ListNode(elem);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;

    this.tail = newNode;
  }

  dequeue() {
    if (!this.head) {
      return this;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead.value;
  }
}

module.exports = Queue;
// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// // eslint-disable-next-line no-console
// console.log(queue.dequeue());
// // eslint-disable-next-line no-console
// console.log(queue.dequeue());
