// топологическая сортировка

import DepthFirstOrder from '../depthFirstOrder/depthFirstOrder';
import DirectedCycle from '../directedCycle/directedCycle';

export default class Topological {
  constructor(digraph) {
      this.order = null;
      let searchCycle = new DirectedCycle(digraph);
      if (!searchCycle.hasCycle()) {
          let searchOrder = new DepthFirstOrder(digraph);
          this.order = searchOrder.reverseOrder;
      }
  }
  isDirectAcyclicGraph() {
      return this.order != null;
  } 
}
