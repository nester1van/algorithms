import DepthFirstOrder from './depthFirstOrder/depthFirstOrder';
import DirectedCycle from './directedCycle/directedCycle';
import DirectedDFS from './directedDFS/directedDFS';
import DirectedDFSMult from './directedDFSMult/directedDFSMult';
import Digraph from './directedGraph/directedGraph';
import KosarajuStronglyConnectedComponents from './kosarajuStronglyConnectedComponents/kosarajuStronglyConnectedComponents';
import Topological from './topological/topological';

const DirectedGraphs = {
  DepthFirstOrder,
  DirectedCycle,
  DirectedDFS,
  DirectedDFSMult,
  Digraph,
  KosarajuStronglyConnectedComponents,
  Topological
};

export default DirectedGraphs;