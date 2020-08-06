// алгоритм Косараю для вычисления сильных компонентов

import DepthFirstOrder from '../depthFirstOrder/depthFirstOrder';

export default class KosarajuStronglyConnectedComponents {
  constructor(digraph) {
      this.marked = [];
      this.id = [];
      this.count = 0;
      let depthFirstOrder = new DepthFirstOrder(digraph.reverse());
      let order = depthFirstOrder.reverseOrder;
      while (!order.isEmpty) {
          let sourceV = order.pop();
          if (!this.marked[sourceV]) {
              this.dfs(digraph, sourceV);
              this.count++;
          }
      }
  }
  dfs(digraph, currentV) {
      this.marked[currentV] = true;
      this.id[currentV] = this.count;
      for (let nextV of digraph.adj[currentV].fnGenerator()) {
          if (!this.marked[nextV]) {
              this.dfs(digraph, nextV);
          }
      }
  }
  stronglyConnected(currentV, nextV) {
      return this.id[currentV] == this.id[nextV];
  }
}