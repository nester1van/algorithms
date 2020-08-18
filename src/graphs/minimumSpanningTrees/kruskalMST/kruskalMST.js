import Queue from '../../../abstractDataTypes/queueUseLinkedList/queueUseLinkedList';
import MinPQ from '../../../abstractDataTypes/minPQ/minPQ';
import { fnComparisionEdge } from '../../../common/fnComparisionEdge/fnComparisionEdge';
import UnionFindQuickSearch from '../../../otherAlgorithms/unionFindQuickSearch/unionFindQuickSearch';
// алгоритм Крускала для нахождения минимальных остовных деревьев
export default class KruskalMST {
  constructor(weightedGraph) {
      this.mst = new Queue();
      this.minPQ = new MinPQ(fnComparisionEdge);
      this.uf = new UnionFindQuickSearch(weightedGraph.V);
      for (let v = 0; v < weightedGraph.V; v++) {
          for (let edge of weightedGraph.adj[v].fnGenerator()) {
              if (edge.other(v) > v) this.minPQ.insert(edge);
          }
      }
      while (!this.minPQ.isEmpty() && this.mst.size < weightedGraph.V - 1) {
          let edge = this.minPQ.delMin();
          let v = edge.either();
          let w = edge.other(v);
          if (this.uf.connected(v, w)) continue;
          this.uf.union(v, w);
          this.mst.enqueue(edge);
      }
  } 
};