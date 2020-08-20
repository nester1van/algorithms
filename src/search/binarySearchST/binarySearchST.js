// бинарный поиск в упорядоченном массиве

export default class BinarySearchST {
  constructor() {
    this.arrKeys = [];
    this.arrValues = [];
    this.n = 0;
  }
  rank(key, lo, hi) {
    if (hi < lo) return lo;
    let mid = lo + Math.floor((hi - lo) / 2);
    if (key < this.arrKeys[mid]) {
      return this.rank(key, lo, mid - 1);
    }
    else if (key > this.arrKeys[mid]) {
      return this.rank(key,mid + 1, hi);
    }
    else return mid;
  }
  put(key, value) {
    if (this.n == 0) {
      this.arrKeys[0] = key;
      this.arrValues[0] = value;
      this.n++;
      return;
    }
    let r = this.rank(key, 0, this.n - 1);
    if (r < this.n && key == this.arrKeys[r]) {
      this.arrValues[r] = value;
      return;
    }
    // console.log(r);
    this.arrKeys.splice(r, 0, key);
    this.arrValues.splice(r, 0, value);
    this.n++;
  }
  get(key) {
    if (this.n == 0) {
      return null;
    }
    let r = this.rank(key, 0, this.n -1);
    if (r < this.n && this.arrKeys[r] == key) {
      return this.arrValues[r];
    }
    return null;
  }
  minKey() {
    if (this.n == 0) return null;
    return this.arrKeys[0];
  }
  maxKey() {
    if (this.n == 0) return null;
    return this.arrKeys[this.n - 1];
  }
  select(r) {
    if (r < 0 || r > this.n - 1) {
      return null;
    }
    return this.arrKeys[r];
  }
  ceiling(key) {
    if (this.n == 0) return null;
    let r = this.rank(key, 0, this.n - 1);
    // console.log(r);
    if (this.n - 1 < r) return null;
    return this.arrKeys[r];
  }
  floor(key) {
    if (this.n == 0) return null;
    let r = this.rank(key, 0, this.n - 1);
    if (r == 0) return null;
    return this.arrKeys[r - 1];
  }
  delete(key) {
    if (this.n == 0) return false;
    let r = this.rank(key, 0, this.n - 1);
    if (this.n - 1 < r) return false;
    if (this.arrKeys[r] == key) {
      this.arrKeys.splice(r, 1);
      this.arrValues.splice(r, 1);
      this.n--;
      return true;
    }
    return false;
  }
};