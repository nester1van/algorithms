// быстрое объединение

export default class UnionFindQuickUnion {
  constructor(n) {
    this.n = n;
    this.count = n;
    this.id = [];
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
  }
  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    if (rootP == rootQ) return;
    this.id[rootP] = rootQ; // Корнем узла с индексом 
    //  rootP становится узел с индексом rootQ.
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