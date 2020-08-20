// алгоритм Крускала для нахождения минимальных остовных деревьев

import Queue from '../../../abstractDataTypes/queueUseLinkedList/queueUseLinkedList';
import MinPQ from '../../../abstractDataTypes/minPQ/minPQ';
import { fnComparisonEdge } from '../../../common/fnComparisonEdge/fnComparisonEdge';
import UnionFindQuickSearch from '../../../otherAlgorithms/unionFindQuickSearch/unionFindQuickSearch';

export default class KruskalMST {
  constructor(weightedGraph) {
    this.mst = new Queue();
    this.minPQ = new MinPQ(fnComparisonEdge);
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