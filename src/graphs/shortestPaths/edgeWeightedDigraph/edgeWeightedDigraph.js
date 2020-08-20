// ориентированный граф со взвешенными ребрами

import Bag from '../../../abstractDataTypes/bag/bag';

export class DirectedEdge {
  constructor(v, w, weight) {
    this.v = v;
    this.w = w;
    this.weight = weight;
  }
  from() {
    return this.v;
  }
  to() {
    return this.w;
  }
};

export default class EdgeWeightedDigraph {
  constructor(V) {
    this.V = V;
    this.E = 0;
    this.adj = [];
    for (let v = 0; v < this.V; v++) {
      this.adj[v] = new Bag();
    }
  }
  addEdge(edge) {
    this.adj[edge.from()].add(edge);
    this.E++;
  }
};