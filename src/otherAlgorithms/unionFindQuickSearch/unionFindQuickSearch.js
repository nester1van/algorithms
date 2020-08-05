export default class UnionFindQuickSearch {
  constructor(n) {
      this.n = n;
      this.count = n;
      this.id = [];
      for (let i = 0; i < n; i++) {
          this.id[i] = i;
      }
  }
  union(p, q) {
      let pId = this.find(p);
      let qId = this.find(q);
      if (pId == qId) return;
      for (let i = 0; i <this.id.length; i++) {
          if (this.id[i] == pId) this.id[i] = qId;
      }
      this.count--;
  }
  find(p) {
      return this.id[p];
  }
  connected(p, q) {
      return this.id[p] == this.id[q];
  }
  showCount() {
      return this.count;
  }
}