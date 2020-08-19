import hashFunction from '../hashFunction/hashFunction';
// хеширование с линейным опробованием
export default class LinearProbingHashST {
  constructor(rFnHash, mFnHash, lArr) {
      this.rFnHash = rFnHash;
      this.mFnHash = mFnHash;
      this.lArr = lArr;
      this.n = 0;
      this.arrKeys = [];
      this.arrValues = [];
  }
  hash(key) {
      return hashFunction(key, this.rFnHash, this.mFnHash);
  }
  put(key, value) {
      if (this.n >= this.lArr/2) this.lArr *= 2;
      let i;
      for (i = this.hash(key); this.arrKeys[i] != null; i = (i + 1) % this.lArr) {
          if (key == this.arrKeys[i]) {
              this.arrValues[i] = value;
              return;
          }
      }
      this.arrKeys[i] = key;
      this.arrValues[i] = value;
      this.n++;
  }
  get(key) {
      for (let i = this.hash(key); this.arrKeys[i] != null; i = (i + 1) % this.lArr) {
          if (key == this.arrKeys[i]) {
              return this.arrValues[i];
          }
      }
      return null;
  }
  contains(key) {
      return this.get(key) != null; 
  }
  delete(key) {
      if (!this.contains(key)) return;
      let i = this.hash(key);
      while (key != this.arrKeys[i]) {
          i = (i + 1) % this.lArr;
      }
      this.arrKeys[i] = null;
      this.arrValues[i] = null;
      i = (i + 1) % this.lArr;
      while (this.arrKeys[i] != null) {
          let currentKey = this.arrKeys[i];
          let currentValue = this.arrValues[i];
          this.arrKeys[i] = null;
          this.arrValues[i] = null;
          this.n--;
          this.put(currentKey, currentValue);
          i = (i + 1) % this.lArr;
      }
      this.n--;
      if (this.n > 0 && this.n == this.lArr / 8) this.lArr /= 2;
  }
};