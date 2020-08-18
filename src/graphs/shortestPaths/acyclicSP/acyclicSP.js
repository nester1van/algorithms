import Digraph from '../../directedGraphs/directedGraph/directedGraph';
import Topological from '../../directedGraphs/topological/topological';
// кратчайшие пути в ориентированном ациклическом орграфе со взвешенными ребрами
export default class AcyclicSP {
  constructor(weightedDigraph, s) {
      this.edgeTo = [];
      this.distTo = [];
      for (let v = 0; v < weightedDigraph.V; v++) {
          this.distTo[v] = Number.POSITIVE_INFINITY;
      }
      this.distTo[s] = 0;

      let diGraph = new Digraph(weightedDigraph.V);
      for (let v = 0; v < weightedDigraph.V; v++) {
          for (let edge of weightedDigraph.adj[v].fnGenerator()) {
              let w = edge.to();
              diGraph.addEdge(v, w);
          }
      }

      this.top = new Topological(diGraph);
      while (!this.top.order.isEmpty) {
          let v = this.top.order.pop();
          this.relax(weightedDigraph, v);
      }
  }
  relax(weightedDigraph, v) {
      for (let edge of weightedDigraph.adj[v].fnGenerator()) {
          let w = edge.to();
          if (this.distTo[w] > this.distTo[v] + edge.weight) {
              this.distTo[w] = this.distTo[v] + edge.weight;
              this.edgeTo[w] = edge;
          }
      }
  }
};