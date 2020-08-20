// контейнер

export default class Bag {
  constructor() {
    this.bag = [];
    this._size = 0;
  }
  add(item) {
    this.bag.push(item);
    this._size++;
  }
  get isEmpty() {
    return this._size < 1;
  }
  get size() {
    return this._size;
  }
  [Symbol.iterator]() {
    return {
      arr: this.bag,
      indexIter: 0,
      next: function() {
        return this.indexIter < this.arr.length ?
        {value: this.arr[this.indexIter++], done: false} :
        {done: true};
      }
    }
  }
  get iterator() {
    return this[Symbol.iterator]();
  }
  * fnGenerator() {
    yield* this.bag;
  }
};