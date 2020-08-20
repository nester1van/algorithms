// граф со взвешенными ребрами

import Bag from '../../../abstractDataTypes/bag/bag';

export class Edge {
  constructor(v, w, weight) {
    this.v = v;
    this.w = w;
    this.weight = weight;
  }
  either() {
    return this.v;
  }
  other(vertex) {
    if (vertex == this.v) return this.w;
    else if (vertex == this.w) return this.v;
    else throw new Error ("Недопустимое ребро!");
  }
  compareTo(that) {
    if (this.weight < that.weight) return -1;
    if (this.weight > that.weight) return 1;
    return 0;
  }
}
export default class EdgeWeightedGraph {
  constructor(V) {
    this.V = V;
    this.E = 0;
    this.adj = [];
    for (let sourceV = 0; sourceV < this.V; sourceV++) {
      this.adj[sourceV] = new Bag();
    }
  }
  addEdge(edge) {
    let v = edge.either();
    let w = edge.other(v);
    this.adj[v].add(edge);
    this.adj[w].add(edge);
    this.E++;
  }
};