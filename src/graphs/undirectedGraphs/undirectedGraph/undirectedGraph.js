// неориентированный граф

import Bag from '../../../abstractDataTypes/bag/bag';

export default class Graph {
  constructor(V) {
    this.V = V;
    this.E = 0;
    this.adj = [];
    for (let i = 0; i < this.V; i++) {
      this.adj[i] = new Bag();
    }
  }
  addEdge(v, w) {
    this.adj[v].add(w);
    this.adj[w].add(v);
    this.E++;
  }
};