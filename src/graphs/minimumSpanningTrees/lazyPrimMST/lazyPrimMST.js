import Queue from '../../../abstractDataTypes/queueUseLinkedList/queueUseLinkedList';
import MinPQ from '../../../abstractDataTypes/minPQ/minPQ';
import { fnComparisonEdge } from '../../../common/fnComparisonEdge/fnComparisonEdge';
// ленивый вариант алгоритма Прима
export default class LazyPrimMST {
  constructor(weightedGraph) {
      this.marked = [];
      this.minPQ = new MinPQ(fnComparisonEdge);
      this.mst = new Queue();
      this.visit(weightedGraph, 0);
      while (!this.minPQ.isEmpty()) {
          let edge = this.minPQ.delMin();
          let v = edge.either(); 
          let w = edge.other(v);
          if (this.marked[v] && this.marked[w]) continue;
          this.mst.enqueue(edge);
          if (!this.marked[v]) this.visit(weightedGraph, v);
          if (!this.marked[w]) this.visit(weightedGraph, w); 
      }
  }
  visit(weightedGraph, currentV) {
      this.marked[currentV] = true;
      for (let edge of weightedGraph.adj[currentV].fnGenerator()) {
          if (!this.marked[edge.other(currentV)]) {
              this.minPQ.insert(edge);
          }
      }
  }
};