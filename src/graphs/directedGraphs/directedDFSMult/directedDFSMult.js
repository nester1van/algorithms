// достижимость в орграфе из нескольких вершин
export default class DirectedDFSMult {
  constructor(digraph, arrSourceV) {
      this.marked = [];
      for (let sourceV = 0; sourceV < arrSourceV.length; sourceV++) {
          if (!this.marked[arrSourceV[sourceV]]) {
              this.dfs(digraph, arrSourceV[sourceV]);
          }
      }
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