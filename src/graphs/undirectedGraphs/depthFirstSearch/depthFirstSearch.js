// поиск в глубину

export default class DepthFirstSearch {
  constructor(graph, sourceV) {
    this.arrMarked = [];
    this.count = 0;
    this.dfs(graph, sourceV);
  }
  dfs(graph, currentV) {
    this.arrMarked[currentV] = true;
    this.count++;
    for (let nextV of graph.adj[currentV].fnGenerator()) {
      if (!this.marked(nextV)) {
      // console.log(currentV,nextV);
        this.dfs(graph, nextV); 
      } 
    }
  }
  marked(v) {
    return this.arrMarked[v] === true;
  }
};