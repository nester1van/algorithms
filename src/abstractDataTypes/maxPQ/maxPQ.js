// очередь с приоритетами
export default class MaxPQ {
  constructor(fnComparision) {
      this.arr = [];
      this.n = 0;
      this.fnComparision = fnComparision;
  }
  isEmpty() {
      return this.n == 0;
  }
  size() {
      return this.n;
  }
  less(i, j) {
      return this.fnComparision(this.arr[i], this.arr[j]) < 0;
  }
  exch(i, j) {
      if (i == j) return;
      let temp = this.arr[i];
      this.arr[i] = this.arr[j];
      this.arr[j] = temp;
  }
  swim(k) {
      while (k > 1 && this.less(Math.floor(k/2), k)) {
          this.exch(k, Math.floor(k/2));
          k = Math.floor(k/2);
      }
  }
  sink(k) {
      while (2 * k <= this.n) {
          let j = 2 * k;
          if (j < this.n && this.less(j, j+1)) j++;
          if (!this.less(k, j)) break;
          this.exch(k, j);
          k = j;
      }
  }
  delMax() {
      if (this.isEmpty()) throw new Error("try to get max from empty queue!");
      let max = this.arr[1];
      this.exch(1, this.n--);
      //this.arr[this.n + 1] = null;
      this.arr.pop();
      this.sink(1);
      return max; 
  }
  insert(v) {
      this.arr[++this.n] = v;
      this.swim(this.n);
  }
}
