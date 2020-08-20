// нахождение ориентированного цикла во взвешенном графе

import Stack from '../../../abstractDataTypes/stackUseLinkedList/stackUseLinkedList';

export default class EdgeWeightedCycleFinder {
  constructor(weightedDigraph) {
    this.marked = [];
    this.onStack = [];
    this.cycle = null;
    this.edgeTo = [];
    for (let sourceV = 0; sourceV < weightedDigraph.V; sourceV++) {
      if (!this.marked[sourceV]) {
        this.dfs(weightedDigraph, sourceV);
      }
    }
  }
  dfs(weightedDigraph, currentV) {
    this.marked[currentV] = true;
    this.onStack[currentV] = true;
    for (let edge of weightedDigraph.adj[currentV].fnGenerator()) {
      let nextV = edge.to();
      if (this.hasCycle()) return;
      else if (!this.marked[nextV]) {
        this.edgeTo[nextV] = edge;
        this.dfs(weightedDigraph, nextV);
      }
      else if (this.onStack[nextV] === true) {
        this.cycle = new Stack();
        for (let cycleV = currentV; cycleV != nextV; cycleV = this.edgeTo[cycleV].from()) {
          let edge = this.edgeTo[cycleV];
          this.cycle.push(edge);
        }
        this.cycle.push(this.edgeTo[nextV]);
        this.cycle.push(this.edgeTo[currentV]);
      }
    }
    this.onStack[currentV] = false;
  }
  hasCycle() {
    return this.cycle != null;
  }
};