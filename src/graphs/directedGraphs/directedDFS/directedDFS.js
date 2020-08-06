// достижимость в ориентированных графах

export default class DirectedDFS {
  constructor(digraph, sourceV) {
      this.marked = [];
      this.dfs(digraph, sourceV);
  }
  dfs(digraph, currentV) {
      this.marked[currentV] = true;
      for (let nextV of digraph.adj[currentV].fnGenerator()) {
          if (!this.marked[nextV]) {
              this.dfs(digraph, nextV);
          }
      } 
  }
}