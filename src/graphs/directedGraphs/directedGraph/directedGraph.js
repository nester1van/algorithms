import Bag from '../../../abstractDataTypes/bag/bag';
// ориентированный граф
export default class Digraph {
  constructor(V) {
      this.E = 0;
      this.V = V;
      this.adj = [];
      for (let v = 0; v < this.V; v++) {
          this.adj[v] = new Bag();
      }
  }
  addEdge(v, w) {
      this.adj[v].add(w);
      this.E++;
  }
  reverse() {
      let reverseDigraph = new Digraph(this.V);
      for (let v = 0; v <reverseDigraph.V; v++) {
          for (let w of this.adj[v].fnGenerator()) {
              reverseDigraph.addEdge(w, v);
          }
      }
      return reverseDigraph;
  }
}