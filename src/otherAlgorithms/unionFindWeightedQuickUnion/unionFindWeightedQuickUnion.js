// взвешенное быстрое объединение

export default class UnionFindWeightedQuickUnion {
  constructor(n) {
    this.n = n;
    this.count = n;
    this.size = [];
    this.id = [];
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
      this.size[i] = 1;
    }
  }
  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    if (rootP == rootQ) return;
    if (this.size[rootP] < this.size[rootQ]) {
      this.id[rootP] = rootQ; // Корнем узла с индексом 
      //  rootP становится узел с индексом rootQ.
      this.size[rootQ] += this.size[rootP];
    }
    else {
      this.id[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    }

    this.count--;
  }
  find(p) {
    // Ищет корень дерева узла с индексом p.

    // В корне дерева находится узел, у которого 
    // индекс совпадает с содержимым этого узла (i == id[i]).
    while (p !=  this.id[p]) {
      p = this.id[p]; // Индекс родительского узла равен содержимому текущего узла.
    }
    return p; // Возвращается индекс корня дерева.
  }
  connected(p, q) { 
    // Соединены, если имеют общий корень. 
    return this.find(p) == this.find(q);
  }
  count() {
    return this.count;
  }
};