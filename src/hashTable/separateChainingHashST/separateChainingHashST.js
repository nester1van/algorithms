// хеширование с раздельными цепочками

import hashFunction from '../hashFunction/hashFunction';
import SequentialSearchST from '../../search/sequentialSearchST/sequentialSearchST';

export default class SeparateChainingHashST{
  constructor(m, r) {
    this.m = m;
    this.r = r;
    this.arrSequentialSearchST = [];
    for (let i = 0; i < m; i++) {
      this.arrSequentialSearchST[i] = new SequentialSearchST();
    }
  }
  hash(key) {
    return hashFunction(key, this.r, this.m);
  }
  get(key) {
    return this.arrSequentialSearchST[this.hash(key)].get(key);
  }
  put(key, value) {
    this.arrSequentialSearchST[this.hash(key)].put(key, value);
  }
  has(key) {
    return this.arrSequentialSearchST[this.hash(key)].get(key) != null;
  }
  delete(key) {
    return this.arrSequentialSearchST[this.hash(key)].delete(key);
  }
};

