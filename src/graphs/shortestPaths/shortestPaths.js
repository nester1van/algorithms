import AcyclicSP from './acyclicSP/acyclicSP';
import BellmanFordSP from './bellmanFordSP/bellmanFordSP';
import DijkstraSP from './dijkstraSP/dijkstraSP';
import EdgeWeightedCycleFinder from './edgeWeightedCycleFinder/edgeWeightedCycleFinder';
import EdgeWeightedDigraph, { DirectedEdge } from './edgeWeightedDigraph/edgeWeightedDigraph';

const ShortestPath = {
  AcyclicSP,
  BellmanFordSP,
  DijkstraSP,
  DirectedEdge,
  EdgeWeightedCycleFinder,
  EdgeWeightedDigraph
};

export default ShortestPath;