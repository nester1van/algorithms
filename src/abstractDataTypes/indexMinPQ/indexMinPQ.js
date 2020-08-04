// индексная очередь с приоритетами
export default class IndexMinPQ {
  constructor(fnComparision) {
      this.pq = [];
      this.qp = [];
      this.keys = [];
      this.n = 0;
      this.fnComparision = fnComparision;
  }
  isEmpty() {
      return this.n == 0;
  }
  contains(k) {
      return this.qp[k] != -1 && this.qp[k] != undefined;
  }
  size() {
      return this.n;
  }
  more(i, j) {
      return this.fnComparision(this.keys[this.pq[i]], this.keys[this.pq[j]]) > 0;
  }
  exch(i, j) {
      if (i == j) return;
      if (i < 1 || j < 1 || i > this.n || j > this.n) return;
      let ki = this.pq[i];
      let kj = this.pq[j];
      this.pq[i] = kj;
      this.pq[j] = ki;
      this.qp[ki] = j;
      this.qp[kj] = i;
  }
  swim(i) {
      while (i > 1 && this.more(Math.floor(i/2), i)) {
          this.exch(i, Math.floor(i/2));
          i = Math.floor(i/2);
      }
  }
  sink(i) {
      while (2 * i <= this.n) {
          let j = 2 * i;
          if (j < this.n && this.more(j, j+1)) j++;
          if (!this.more(i, j)) break;
          this.exch(i, j);
          i = j;
      }
  }
  delMin() {
      if (this.isEmpty()) throw new Error("try to get min from empty queue!");
      let indexOfMin = this.pq[1];
      this.exch(1, this.n);
      this.n--; 
      this.keys[this.pq[this.n + 1]] = null;
      this.sink(1);
      this.pq.pop(); 
      this.qp[this.pq[this.n + 1]] = -1;
      return indexOfMin; 
  }
  min() {
      return this.keys[this.pq[1]];
  }
  insert(k, key) {
      this.n++;
      this.qp[k] = this.n;
      this.pq[this.n] = k;
      this.keys[k] = key;
      this.swim(this.n);
  }
  minIndex() {
      return this.pq[1];
  }
  change(k, key) {
      this.keys[k] = key;
      this.swim(this.qp[k]);
      this.sink(this.qp[k]);
  }
  delete(k) {
      this.exch(this.qp[k], this.n);
      this.n--;
      this.pq.pop();
      this.swim(this.qp[k]);
      this.sink(this.qp[k]);
      this.keys[k] = null;
      this.qp[k] = -1;
  }
}