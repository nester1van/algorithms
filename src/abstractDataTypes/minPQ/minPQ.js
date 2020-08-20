// очередь с приоритетами

export default class MinPQ {
  constructor(fnComparison) {
    this.arr = [];
    this.n = 0;
    this.fnComparison = fnComparison;
  }
  isEmpty() {
    return this.n == 0;
  }
  size() {
    return this.n;
  }
  more(i, j) {
    return this.fnComparison(this.arr[i], this.arr[j]) > 0;
  }
  exch(i, j) {
    if (i == j) return;
    let temp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = temp;
  }
  swim(k) {
    while (k > 1 && this.more(Math.floor(k/2), k)) {
      this.exch(k, Math.floor(k/2));
      k = Math.floor(k/2);
    }
  }
  sink(k) {
    while (2 * k <= this.n) {
      let j = 2 * k;
      if (j < this.n && this.more(j, j+1)) j++;
      if (!this.more(k, j)) break;
      this.exch(k, j);
      k = j;
    }
  }
  delMin() {
    if (this.isEmpty()) throw new Error("try to get min from empty queue!");
    let min = this.arr[1];
    this.exch(1, this.n--);
    this.arr.pop();
    this.sink(1);
    return min; 
  }
  insert(v) {
    this.arr[++this.n] = v;
    this.swim(this.n);
  }
};


