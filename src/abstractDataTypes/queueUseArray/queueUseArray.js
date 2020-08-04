// очередь на основе массива
export default class QueueUseArray {
  constructor() {
      this.queue = [];
  }
  enqueue(item) {
      this.queue.push(item);
  }
  get dequeue() {
      return this.queue.shift();
  }
  get isEmpty() {
      return this.size < 1;
  }
  get size() {
      return this.queue.length;
  }
  
  [Symbol.iterator]() {
      return {
          arr: this.queue,
          indexIter: 0,
          hasNext: function() {
              return this.indexIter < this.arr.length;
          },
          next: function() {
              return this.hasNext() ?
              {value: this.arr[this.indexIter++], done: false} :
              {done: true};
          }
      }
  }

  get iterator() {
      return this[Symbol.iterator]();
  }
}