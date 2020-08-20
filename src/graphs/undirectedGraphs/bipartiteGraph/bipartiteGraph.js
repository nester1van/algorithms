// двудольный граф

export default class TwoColor {
  constructor(graph) {
    this.marked = [];
    this.color = [];
    this.isTwoColorable = true;
    for (let sourceV = 0; sourceV < graph.V; sourceV++) {
      if (!this.marked[sourceV]) {
        this.dfs(graph, sourceV);
      }
    }
  }
  dfs(graph, currentV) {
    this.marked[currentV] = true;
    for (let nextV of graph.adj[currentV].fnGenerator()) {
      if (!this.marked[nextV]) {
        this.color[nextV] = !this.color[currentV];
        this.dfs(graph, nextV);
      }
      else if (this.color[nextV] == this.color[currentV]) {
        this.isTwoColorable = false;
      } 
    }
  }
};