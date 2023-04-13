/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

class Queue {
  queue: number[] = [];
  add(n: number) {
    this.queue.push(n);
  }

  remove() {
    return this.queue.shift();
  }
}

/*class Queue {
  constructor(
    private elements: Record<number, number> = {},
    private head: number = 0,
    private tail: number = 0
  ) {}
  add(n: number) {
    this.elements[this.tail] = n;
    this.tail++;
  }
  remove() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
}*/

export { Queue };
