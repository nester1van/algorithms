// стек на основе массива
export default class StackUseArray {
  constructor() {
      this.stack = [];
  }
  push(item) {
      this.stack.push(item);
  }
  pop() {
      return this.stack.pop();
  }
  get isEmpty() {
      return this.stack.length < 1;
  }
  get size() {
      return this.stack.length;
  }
  [Symbol.iterator]() {
      return {
          indexIter: this.stack.length - 1,
          arr: this.stack,
          hasNext() {
              return this.indexIter > -1;
          },
          next() {
              return this.hasNext() ?
              {value: this.arr[this.indexIter--], done: false} :
              {done: true}
          }
      }
  }
  get iterator() {
      return this[Symbol.iterator]();
  }
}