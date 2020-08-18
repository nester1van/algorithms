import Stack from '../../../abstractDataTypes/stackUseLinkedList/stackUseLinkedList';
// нахождение путей в глубину
export default class DepthFirstPath {
  constructor(graph, sourceV) {
      this.sourceV = sourceV;
      this.edgeTo = [];
      this.marked = [];
      this.dfs(graph, this.sourceV);
  }
  dfs(graph, currentV) {
      this.marked[currentV] = true;
      for (let nextV of graph.adj[currentV].fnGenerator()) {
          if (!this.marked[nextV]) {
              this.edgeTo[nextV] = currentV;
              this.dfs(graph, nextV);
          }
      }
  }
  hasPathTo(distV) {
      return this.marked[distV] === true;
  }
  pathTo(distV) {
      if (!this.hasPathTo(distV)) return null;
      let path = new Stack();
      for (let v = distV; v != this.sourceV; v = this.edgeTo[v]) {
          path.push(v);
      }
      path.push(this.sourceV);
      return path;
  }
};