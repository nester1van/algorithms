// обнаружение циклов
export default class Cycle {
  constructor(graph) {
      this.marked = [];
      this.hasCycle = false;
      for (let sourceV = 0; sourceV < graph.V; sourceV++) {
          if (!this.marked[sourceV]) {
              this.dfs(graph, sourceV, sourceV);
          }
      }
  }
  dfs(graph, currentV, prevV) {
      this.marked[currentV] = true;
      for (let nextV of graph.adj[currentV].fnGenerator()) {
          if (!this.marked[nextV]) {
              this.dfs(graph, nextV, currentV);
          }
          else if (nextV != prevV) {
              this.hasCycle = true;
          }
      }
  }
};