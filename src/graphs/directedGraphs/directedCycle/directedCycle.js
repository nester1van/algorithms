// нахождение ориентированного цикла

import Stack from '../../../abstractDataTypes/stackUseLinkedList/stackUseLinkedList';

export default class DirectedCycle {
  constructor(digraph) {
    this.marked = [];
    this.onStack = [];
    this.cycle = null;
    this.edgeTo = [];
    for (let sourceV = 0; sourceV < digraph.V; sourceV++) {
      if (!this.marked[sourceV]) {
        this.dfs(digraph, sourceV);
      }
    }
  }
  dfs(digraph, currentV) {
    this.marked[currentV] = true;
    this.onStack[currentV] = true;
    for (let nextV of digraph.adj[currentV].fnGenerator()) {
      if (this.hasCycle()) return;
      else if (!this.marked[nextV]) {
        this.edgeTo[nextV] = currentV;
        this.dfs(digraph, nextV);
      }
      else if (this.onStack[nextV] === true) {
        this.cycle = new Stack();
        for (let cycleV = currentV; cycleV != nextV; cycleV = this.edgeTo[cycleV]) {
          this.cycle.push(cycleV);
        }
        this.cycle.push(nextV);
        this.cycle.push(currentV);
      }
    }
    this.onStack[currentV] = false;
  }
  hasCycle() {
    return this.cycle != null;
  }
};