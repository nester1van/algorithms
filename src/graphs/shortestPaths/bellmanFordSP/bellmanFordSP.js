// алгоритм Беллмана-Форда для нахождения кратчайшего пути

import Queue from '../../../abstractDataTypes/queueUseLinkedList/queueUseLinkedList';
import EdgeWeightedDigraph from '../edgeWeightedDigraph/edgeWeightedDigraph';
import EdgeWeightedCycleFinder from '../edgeWeightedCycleFinder/edgeWeightedCycleFinder'

export default class BellmanFordSP {
  constructor(weightedDigraph, s) {
    this.distTo = [];
    this.edgeTo = [];
    this.queue = new Queue();
    this.onQ = [];
    this.cost = 0;
    this.cycle = null;
    for (let v = 0; v < weightedDigraph.V; v++) {
      this.distTo[v] = Number.POSITIVE_INFINITY;
    }
    this.distTo[s] = 0;
    this.queue.enqueue(s);
    this.onQ[s] = true;
    while (!this.queue.isEmpty && !this.hasNegativeCycle()) {
      let v = this.queue.dequeue();
      this.onQ[v] = false;
      this.relax(weightedDigraph, v);
    }
  }
 relax(weightedDigraph, v) {
   for (let edge of weightedDigraph.adj[v].fnGenerator()) {
     let w = edge.to();
     if (this.distTo[w] > this.distTo[v] + edge.weight) {
       this.distTo[w] = this.distTo[v] + edge.weight;
       this.edgeTo[w] = edge;
       if (!this.onQ[w]) {
         this.queue.enqueue(w);
         this.onQ[w] = true;
       }
     }
     if (this.cost++ % weightedDigraph.V == 0) {
       this.findNegativeCycle();
     }
   }        
 }
 findNegativeCycle() {
    let V = this.edgeTo.length;
    let spt = new EdgeWeightedDigraph(V);
    for (let v = 0; v < V; v++) {
      if (this.edgeTo[v] != undefined) {
        spt.addEdge(this.edgeTo[v]);
      }
    }
    let cf = new EdgeWeightedCycleFinder(spt);
    this.cycle = cf.cycle;
 }
 hasNegativeCycle() {
   return this.cycle != null;
 }
};