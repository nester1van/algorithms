import Queue from '../../../abstractDataTypes/queueUseLinkedList/queueUseLinkedList';
// нахождение путей в ширину
export default class BreadthFirstPaths {
  constructor(graph, sourceV) {
      this.sourceV = sourceV;
      this.marked = [];
      this.edgeTo = [];
      this.bfs(graph);
  }
  marked(v) {
      return marked[v] === true;
  }
  bfs(graph) {
      let queue = new Queue();
      this.marked[this.sourceV] = true;
      queue.enqueue(this.sourceV);
      while (!queue.isEmpty) {
          let currentV = queue.dequeue();
          for (let nextV of graph.adj[currentV].fnGenerator()) {
              if (!this.marked[nextV]) {
                  this.marked[nextV] = true;
                  this.edgeTo[nextV] = currentV;
                  queue.enqueue(nextV);
              }
          }

      }
  } 
  hasPathTo(distV) {
      return this.marked[distV];
  }
  pathTo(distV) {
      let path = new Stack();
      for (let v = distV; v != this.sourceV; v = this.edgeTo[v]) {
          path.push(v);
      }
      path.push(this.sourceV);
      return path;
  }
};