// nondeterministic finite-state automata

import Stack from '../../../abstractDataTypes/stackUseLinkedList/stackUseLinkedList';
import Digraph from '../../../graphs/directedGraphs/directedGraph/directedGraph';
import Bag from '../../../abstractDataTypes/bag/bag';
import DirectedDFSMult from '../../../graphs/directedGraphs/directedDFSMult/directedDFSMult';

export default class NFA {
  constructor(regexp) {
    let ops = new Stack();
    this.re = [];
    this.M = regexp.length;
    this.re = regexp.split("");
    this.G = new Digraph(this.M + 1);
    for (let i = 0; i < this.M; i++) {
      let lp = i;
      if (this.re[i] == "(" || this.re[i] == "|") {
        ops.push(i);
      }
      else if (this.re[i] == ")") {
        let or = ops.pop();
        if (this.re[or] == "|") {
          lp = ops.pop();
          this.G.addEdge(lp, or + 1);
          this.G.addEdge(or, i);
        }
        else {
          lp = or;
        }
      }
      if (i < this.M - 1 && this.re[i + 1] == "*") {
        this.G.addEdge(lp, i + 1);
        this.G.addEdge(i + 1, lp);
      }
      if (this.re[i] == "(" || this.re[i] == "*" || this.re[i] == ")") {
        this.G.addEdge(i, i + 1);
      }
    }
  }
  recognizes(text) {
    let pc = new Bag();
    let dfs = new DirectedDFSMult(this.G, [0]);
    for (let v = 0; v < this.G.V; v++) {
      if (dfs.marked[v]) pc.add(v);
    }
    for (let i = 0; i < text.length; i++) {
      let match = [];
      for (let v of pc.fnGenerator()) {
        if (v  < this.M) {
          if (this.re[v] == text[i] || this.re[v] == ".") {
            match.push(v + 1);
          }
        }
      }
      pc = new Bag();
      dfs = new DirectedDFSMult(this.G, match);
      for (let v = 0; v < this.G.V; v++) {
        if (dfs.marked[v]) pc.add(v);
      }
    }
    for (let v of pc.fnGenerator()) {
      if (v == this.M - 1) return true;
    }
    return false;
  }
};