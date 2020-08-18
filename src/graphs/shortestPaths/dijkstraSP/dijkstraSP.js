import IndexMinPQ from '../../../abstractDataTypes/indexMinPQ/indexMinPQ';
import { fnComparisionNumber } from '../../../common/fnComparisin/fnComparision';
// алгоритм Дейкстры для нахождения кратчайшего пути
export default class DijkstraSP {
  constructor(weightedDigraph, s) {
      this.edgeTo = [];
      this.distTo = [];
      this.pq = new IndexMinPQ(fnComparisionNumber);
      for (let v = 0; v < weightedDigraph.V; v++) {
          this.distTo[v] = Number.POSITIVE_INFINITY;
      }
      this.distTo[s] = 0;
      this.pq.insert(s, 0);
      while (!this.pq.isEmpty()) {
          this.relax(weightedDigraph, this.pq.delMin());
      }
  }
  relax(weightedDigraph, v) {
      for (let edge of weightedDigraph.adj[v].fnGenerator()) {
          let w = edge.to();
          if (this.distTo[w] > this.distTo[v] + edge.weight) {
              this.distTo[w] = this.distTo[v] + edge.weight;
              this.edgeTo[w] = edge;
              if (this.pq.contains(w)) this.pq.change(w, this.distTo[w]);
              else this.pq.insert(w, this.distTo[w]);
          }
      }
  }
};