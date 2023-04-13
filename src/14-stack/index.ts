/**
 * Stack
 *
 * Create a stack data structure. The stack
 * should be a class with methods 'push', 'pop', and
 * 'peek'.  Adding an element to the stack should
 * store it until it is removed.
 *
 * Examples:
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
 */

class Stack {
  stack: number[] = [];
  push(n: number) {
    this.stack.push(n);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

/*interface IStack {
  push(n: number): void;
  pop(): number;
  peek(): number;
}

class Stack implements IStack {
  private storage: Array<number> = [];
  private last: number = 0;
  constructor(private capacity: number = Infinity) {}
  push(n: number): void {
    this.storage[this.last] = n;
    this.last++;
    //console.log(this.storage[this.last - 1]);
  }

  pop(): number {
    const item: number = this.storage[this.last - 1];
    delete this.storage[this.last - 1];
    this.last--;
    return item;
  }

  peek(): number {
    return this.storage[this.last - 1];
  }
}*/

export { Stack };
