// связные компоненты

export default class ConnectedComponents {
  constructor(graph) {
    this.count = 0;
    this.marked = [];
    this.idArr = [];
    for (let sourceV = 0; sourceV < graph.V; sourceV++) {
      if (!this.marked[sourceV]) {
        this.dfs(graph, sourceV);
        this.count++;
      } 
    }
  }
  dfs(graph, currentV) {
    this.marked[currentV] = true;
    this.idArr[currentV] = this.count; 
    for (let nextV of graph.adj[currentV].fnGenerator()) {
      if (!this.marked[nextV]) {
        this.dfs(graph, nextV);
      }
    } 
  }
  connected(v, w) {
    return this.idArr[v] == this.idArr[w];
  }
  id(v) {
    return this.idArr[v];
  }
};