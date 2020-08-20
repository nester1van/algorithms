// символьный граф

import Graph from '../undirectedGraph/undirectedGraph';

export default class SymbolGraph {
  constructor(arrEdges) {
    this.st = new Map();
    this.arrKeys = [];
    for (let edge = 0; edge < arrEdges.length; edge++) {
      this._addVertex(arrEdges[edge][0], arrEdges[edge][1]);
    }
    this.graph = new Graph(this.arrKeys.length);
    for (let edge = 0; edge < arrEdges.length; edge++) {
      this._addEdge(arrEdges[edge][0], arrEdges[edge][1]);
    }
  }
  _addVertex(key1, key2) {
    if (this.st.get(key1) == null) {
      this.st.set(key1, this.arrKeys.length);
      this.arrKeys[this.arrKeys.length] = key1;
    }
    if (this.st.get(key2) == null) {
      this.st.set(key2, this.arrKeys.length);
      this.arrKeys[this.arrKeys.length] = key2;
    }
  }
  _addEdge(key1, key2) {
    this.graph.addEdge(this.st.get(key1), this.st.get(key2));
  }
};
