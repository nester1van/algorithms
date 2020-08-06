// упорядочивание вершин в орграфе 
// с помощью поиска в глубину

import Queue from '../../../abstractDataTypes/queueUseLinkedList/queueUseLinkedList';
import Stack from '../../../abstractDataTypes/stackUseLinkedList/stackUseLinkedList';

export default class DepthFirstOrder {
  constructor(graph) {
      this.marked = [];
      this.preOrder = new Queue();
      this.postOrder = new Queue();
      this.reverseOrder = new Stack();
      for (let sourceV = 0; sourceV < graph.V; sourceV++) {
          if (!this.marked[sourceV]) {
              this.dfs(graph, sourceV);
          }
      }
  }
  dfs(graph, currentV) {
      this.preOrder.enqueue(currentV);
      this.marked[currentV] = true;
      for (let nextV of graph.adj[currentV].fnGenerator()) {
          if(!this.marked[nextV]) {
              this.dfs(graph, nextV);
          }
      }
      this.postOrder.enqueue(currentV);
      this.reverseOrder.push(currentV);
  }
}