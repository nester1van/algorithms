import IndexMinPQ from '../../../abstractDataTypes/indexMinPQ/indexMinPQ';
import { fnComparisionNumber } from '../../../common/fnComparisin/fnComparision';

// энергичный вариант алгоритма Прима для нахождениея МОД
export default class PrimMST {
  constructor(weightedGraph) {
      this.marked = [];
      this.edgeTo = [];
      this.distTo = [];
      for (let v = 0; v < weightedGraph.V; v++) {
          this.distTo[v] = Number.POSITIVE_INFINITY;
      }
      this.pq = new IndexMinPQ(fnComparisionNumber);
      this.distTo[0] = 0;
      this.pq.insert(0, 0);
      while (!this.pq.isEmpty()) {
          this.visit(weightedGraph, this.pq.delMin());
      }
  }
  visit(weightedGraph, v) {
      this.marked[v] = true;
      for (let edge of weightedGraph.adj[v].fnGenerator()) {
          let w = edge.other(v);
          if (this.marked[w] == true) continue;
          if (edge.weight < this.distTo[w]) {
              this.edgeTo[w] = edge;
              this.distTo[w] = edge.weight;
              if (this.pq.contains(w)) this.pq.change(w, this.distTo[w]);
              else this.pq.insert(w, this.distTo[w]);
          }
      }
  }
};