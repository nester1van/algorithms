import Algorithms from './algorithms';

//===================================
// Common 
//===================================

const numberArr = [0, 0, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9];

test('Function comparson of two numbers', () => {
  expect(Algorithms.Common.fnComparisonNumber(4, 5))
  .toBe(-1);
});

test('Function comparson of two strings', () => {
  expect(Algorithms.Common.fnComparisonNumber('a', 'B'))
  .toBe(1);
});

test('Shuffle array', () => {
  expect(Algorithms.Common.shuffle([...numberArr]))
  .not.toEqual([...numberArr]);
});

//===================================
// Graphs
//===================================

// Directed Graphs

let Digraph = Algorithms.Graphs.DirectedGraphs.Digraph;
let DepthFirstOrder = Algorithms.Graphs.DirectedGraphs.DepthFirstOrder;


test('Depth first order', () => {
  let digraph1 = new Digraph(13);
  let arrEdges = [[2, 3], [0, 5], [0, 1], [2, 0],
  [11, 12], [9, 11], [9, 12], [9, 10],
    [3, 5], [8, 7],
  [5, 4], [0, 6], [6, 4], [6, 9], [7, 6]];
  
  for (let i = 0; i < arrEdges.length; i++) {
      digraph1.addEdge(arrEdges[i][0], arrEdges[i][1]);
  }
  
  let depthFirstOrder1 = new DepthFirstOrder(digraph1);

  expect(depthFirstOrder1.marked)
  .toEqual([true, true, true, true, true, true, true, true, true, true, true, true, true]);
});

test('Directed cycle', () => {
  let Stack = Algorithms.AbstractDataTypes.StackUseLinkedList;
  let DirectedCycle = Algorithms.Graphs.DirectedGraphs.DirectedCycle;
  let digraph1 = new Digraph(13);
  let arrEdges = [[4, 2], [2, 3], [3, 2], [6, 0], [0, 1], [2, 0],
  [11, 12], [12, 9], [9, 10], [9, 11],
  [8, 9], [10, 12], [11, 4], [4, 3], [3, 5], [7, 8],
  [8, 7], [5, 4], [0, 5], [6, 4], [6, 9], [7, 6]];
  let resultStack = new Stack();
  let arrForStack = [3, 2, 3];
  for (let item in arrForStack) {
    resultStack.push(item);
  }
  for (let i = 0; i < arrEdges.length; i++) {
      digraph1.addEdge(arrEdges[i][0], arrEdges[i][1]);
  }
  let directedCycle1 = new DirectedCycle(digraph1);
  expect(directedCycle1.cycle).toEqual; // 2 3 2
})

test('Directed depth first search', () => {
  let DirectedDFS = Algorithms.Graphs.DirectedGraphs.DirectedDFS;
  let digraph1 = new Digraph(13);
  let arrEdges = [[4, 2], [2, 3], [3, 2], [6, 0], [0, 1], [2, 0],
  [11, 12], [12, 9], [9, 10], [9, 11],
  [8, 9], [10, 12], [11, 4], [4, 3], [3, 5], [7, 8],
  [8, 7], [5, 4], [0, 5], [6, 4], [6, 9], [7, 6]];
  
  for (let i = 0; i < arrEdges.length; i++) {
      digraph1.addEdge(arrEdges[i][0], arrEdges[i][1]);
  }
  
  let directedDFS1 = new DirectedDFS(digraph1, 1);
  expect(directedDFS1.marked).toEqual([ , true]);
})

test('directed depth first searc from multiple vertex', () => {
  let DirectedDFSMult = Algorithms.Graphs.DirectedGraphs.DirectedDFSMult;
  let digraph1 = new Digraph(13);
  let arrEdges = [[4, 2], [2, 3], [3, 2], [6, 0], [0, 1], [2, 0],
  [11, 12], [12, 9], [9, 10], [9, 11],
  [8, 9], [10, 12], [11, 4], [4, 3], [3, 5], [7, 8],
  [8, 7], [5, 4], [0, 5], [6, 4], [6, 9], [7, 6]];
  for (let i = 0; i < arrEdges.length; i++) {
      digraph1.addEdge(arrEdges[i][0], arrEdges[i][1]);
  }

  let directedDFS1 = new DirectedDFSMult(digraph1, [12]);
  expect(directedDFS1.marked)
  .toEqual([true, true, true, true, true, true, , , , true, true, true, true]);
})

test('Directed graph', () => {
  let digraph1 = new Digraph(13);
  let arrEdges = [[4, 2], [2, 3], [3, 2], [6, 0], [0, 1], [2, 0],
  [11, 12], [12, 9], [9, 10], [9, 11],
  [8, 9], [10, 12], [11, 4], [4, 3], [3, 5], [7, 8],
  [8, 7], [5, 4], [0, 5], [6, 4], [6, 9], [7, 6]];
  
  for (let i = 0; i < arrEdges.length; i++) {
      digraph1.addEdge(arrEdges[i][0], arrEdges[i][1]);
  }

  expect(digraph1.E).toBe(22);
});

test('Kosaraju strongly connected Components', () => {
  let KosarajuStronglyConnectedComponents = Algorithms.Graphs.DirectedGraphs.KosarajuStronglyConnectedComponents;
  let digraph2 = new Digraph(6);
  let arrEdges2 = [[2, 1], [1, 2], [0, 1], [0, 3], [3, 4], [4, 5], [5, 3]];
  for (let i = 0; i < arrEdges2.length; i++) {
    digraph2.addEdge(arrEdges2[i][0], arrEdges2[i][1]);
  }
  let kosarajuStronglyConnectedComponents2 = new KosarajuStronglyConnectedComponents(digraph2);
  expect(kosarajuStronglyConnectedComponents2.id)
  .toEqual([2, 1, 1, 0, 0, 0]);
});


test('Topological sorting', () => {
  let Topological = Algorithms.Graphs.DirectedGraphs.Topological;
  let digraph1 = new Digraph(13);
  let arrEdges = [[2, 3], [0, 5], [0, 1], [2, 0],
  [11, 12], [9, 11], [9, 12], [9, 10],
    [3, 5], [8, 7],
  [5, 4], [0, 6], [6, 4], [6, 9], [7, 6]];
  
  for (let i = 0; i < arrEdges.length; i++) {
      digraph1.addEdge(arrEdges[i][0], arrEdges[i][1]);
  }
  
  let topological1 = new Topological(digraph1);
  let arrOrder1 = [];
  while (!topological1.order.isEmpty) {
    arrOrder1.push(topological1.order.pop());
  }
  expect([...arrOrder1])
  .toEqual([8, 7, 2, 3, 0, 6, 9, 10, 11, 12, 1, 5, 4]);
});


// Minimum Spanning Trees

let Edge = Algorithms.Graphs.MinimumSpanningTrees.Edge;
let EdgeWeightedGraph = Algorithms.Graphs.MinimumSpanningTrees.EdgeWeightedGraph;

test('Edge weighted graph', () => {
  let edgeArr = [[4, 5, 0.35], [4, 7, 0.37], [5, 7, 0.28],
  [0, 7, 0.16], [1, 5, 0.32], [0, 4, 0.38], [2, 3, 0.17],
  [1, 7, 0.19], [0, 2, 0.26], [1, 2, 0.36], [1, 3, 0.29],
  [2, 7, 0.34], [6, 2, 0.4], [3, 6, 0.52], [6, 0, 0.58], [6, 4, 0.93]];
  let edge1 = new Edge(edgeArr[0][0], edgeArr[0][1], edgeArr[0][2]);
  let edgeWeightedGraph1 = new EdgeWeightedGraph(8);
  for (let i = 0; i <edgeArr.length; i++) {
      let edge = new Edge(edgeArr[i][0], edgeArr[i][1], edgeArr[i][2]);
      edgeWeightedGraph1.addEdge(edge);
  }
  expect(edgeWeightedGraph1.E).toBe(16);
});

test('Kruskal MST', () => {
  let KruskalMST = Algorithms.Graphs.MinimumSpanningTrees.KruskalMST;
  let edgeArr = [[4, 5, 0.35], [4, 7, 0.37], [5, 7, 0.28],
  [0, 7, 0.16], [1, 5, 0.32], [0, 4, 0.38], [2, 3, 0.17],
  [1, 7, 0.19], [0, 2, 0.26], [1, 2, 0.36], [1, 3, 0.29],
  [2, 7, 0.34], [6, 2, 0.4], [3, 6, 0.52], [6, 0, 0.58], [6, 4, 0.93]];
  let edge1 = new Edge(edgeArr[0][0], edgeArr[0][1], edgeArr[0][2]);

  let edgeWeightedGraph1 = new EdgeWeightedGraph(8);
  for (let i = 0; i <edgeArr.length; i++) {
      let edge = new Edge(edgeArr[i][0], edgeArr[i][1], edgeArr[i][2]);
      edgeWeightedGraph1.addEdge(edge);
  }
  let kruskalMST1= new KruskalMST(edgeWeightedGraph1);
  expect(kruskalMST1.mst.size).toBe(7);
});

test('Lazy Prim MST', () => {
  let LazyPrimMST = Algorithms.Graphs.MinimumSpanningTrees.LazyPrimMST;
  let edgeArr = [[4, 5, 0.35], [4, 7, 0.37], [5, 7, 0.28],
  [0, 7, 0.16], [1, 5, 0.32], [0, 4, 0.38], [2, 3, 0.17],
  [1, 7, 0.19], [0, 2, 0.26], [1, 2, 0.36], [1, 3, 0.29],
  [2, 7, 0.34], [6, 2, 0.4], [3, 6, 0.52], [6, 0, 0.58], [6, 4, 0.93]];
  let edge1 = new Edge(edgeArr[0][0], edgeArr[0][1], edgeArr[0][2]);

  let edgeWeightedGraph1 = new EdgeWeightedGraph(8);
  for (let i = 0; i <edgeArr.length; i++) {
      let edge = new Edge(edgeArr[i][0], edgeArr[i][1], edgeArr[i][2]);
      edgeWeightedGraph1.addEdge(edge);
  }
  let lazyPrimMST1 = new LazyPrimMST(edgeWeightedGraph1);
  expect(lazyPrimMST1.mst.size).toBe(7);
});

test('Prim MST', () => {
  let PrimMST = Algorithms.Graphs.MinimumSpanningTrees.PrimMST;
  let edgeArr = [[4, 5, 0.35], [4, 7, 0.37], [5, 7, 0.28],
  [0, 7, 0.16], [1, 5, 0.32], [0, 4, 0.38], [2, 3, 0.17],
  [1, 7, 0.19], [0, 2, 0.26], [1, 2, 0.36], [1, 3, 0.29],
  [2, 7, 0.34], [6, 2, 0.4], [3, 6, 0.52], [6, 0, 0.58], [6, 4, 0.93]];
  let edgeWeightedGraph1 = new EdgeWeightedGraph(8);
  for (let i = 0; i <edgeArr.length; i++) {
      let edge = new Edge(edgeArr[i][0], edgeArr[i][1], edgeArr[i][2]);
      edgeWeightedGraph1.addEdge(edge);
  }
  let primMST1 = new PrimMST(edgeWeightedGraph1);
  let distTo = [0, 0.19, 0.26, 0.17, 0.35, 0.28, 0.4, 0.16];
  expect(primMST1.distTo).toEqual(distTo);

});

// Shortest Path

let EdgeWeightedDigraph = Algorithms.Graphs.ShortestPaths.EdgeWeightedDigraph;
let DirectedEdge = Algorithms.Graphs.ShortestPaths.DirectedEdge;

test('Acyclic shortest path', () => {
  let AcyclicSP = Algorithms.Graphs.ShortestPaths.AcyclicSP;
  let edgeArr = [[5, 4, 0.35], [4, 7, 0.37], [5, 7, 0.28], [5, 1, 0.32], 
  [4, 0, 0.38], [0, 2, 0.26], [3, 7, 0.39], [1, 3, 0.29], 
  [7, 2, 0.34], [6, 2, 0.4], [3, 6, 0.52], [6, 0, 0.58], [6, 4, 0.93]];
  let edgeWeightedDigraph1 = new EdgeWeightedDigraph(8);
  for (let i = 0; i <edgeArr.length; i++) {
      let edge = new DirectedEdge(edgeArr[i][0], edgeArr[i][1], edgeArr[i][2]);
      edgeWeightedDigraph1.addEdge(edge);
  }
  let acyclicSP1 = new AcyclicSP(edgeWeightedDigraph1, 5);
  let distTo = [0.73, 0.32, 0.6200000000000001, 0.61, 0.35, 0, 1.13, 0.28];
  expect(acyclicSP1.distTo).toEqual(distTo);
});

test('Bellman Ford shortest path', () => {
  let BellmanFordSP = Algorithms.Graphs.ShortestPaths.BellmanFordSP;
  let edgeArr = [[4, 5, 0.35], [5, 4, 0.35], [4, 7, 0.37],
  [5, 7, 0.28], [7, 5, 0.28], [5, 1, 0.32], [0, 4, 0.38],
  [0, 2, 0.26], [7, 3, 0.39], [1, 3, 0.29], [2, 7, 0.34], 
  [6, 2, 0.4], [3, 6, 0.52], [6, 0, 0.58], [6, 4, 0.93]];
  let edgeWeightedDigraph1 = new EdgeWeightedDigraph(8);
  for (let i = 0; i <edgeArr.length; i++) {
      let edge = new DirectedEdge(edgeArr[i][0], edgeArr[i][1], edgeArr[i][2]);
      edgeWeightedDigraph1.addEdge(edge);
  }
  let bellmanFordSP1 = new BellmanFordSP(edgeWeightedDigraph1, 0);
  let distTo = [0, 1.05, 0.26, 0.9900000000000001,
    0.38, 0.73, 1.5100000000000002, 0.6000000000000001];
  expect(bellmanFordSP1.distTo).toEqual(distTo);
  });

test('Dijkstra shortest path', () => {
  let DijkstraSP = Algorithms.Graphs.ShortestPaths.DijkstraSP;
  let edgeArr = [[4, 5, 0.35], [5, 4, 0.35], [4, 7, 0.37],
  [5, 7, 0.28], [7, 5, 0.28], [5, 1, 0.32], [0, 4, 0.38],
  [0, 2, 0.26], [7, 3, 0.39], [1, 3, 0.29], [2, 7, 0.34], 
  [6, 2, 0.4], [3, 6, 0.52], [6, 0, 0.58], [6, 4, 0.93]];
  let edgeWeightedDigraph1 = new EdgeWeightedDigraph(8);
  for (let i = 0; i <edgeArr.length; i++) {
      let edge = new DirectedEdge(edgeArr[i][0], edgeArr[i][1], edgeArr[i][2]);
      edgeWeightedDigraph1.addEdge(edge);
  }
  let dijkstraSP1 = new DijkstraSP(edgeWeightedDigraph1, 0);
  let distTo = [0, 1.05, 0.26, 0.9900000000000001,
    0.38, 0.73, 1.5100000000000002, 0.6000000000000001];
  expect(dijkstraSP1.distTo).toEqual(distTo);
});

test('Edge weighted cycle finder', () => {
  let EdgeWeightedCycleFinder = Algorithms.Graphs.ShortestPaths.EdgeWeightedCycleFinder;
  let weightedDigraph1 = new EdgeWeightedDigraph(4);
  let arrEdges = [[0, 1, 1], [1, 2, 2], [2, 3, 3], [3, 1, 4]];

  for (let i = 0; i < arrEdges.length; i++) {
      let edge = new DirectedEdge(arrEdges[i][0], arrEdges[i][1], arrEdges[i][2]);
      weightedDigraph1.addEdge(edge);
  }
  let edgeWeightedCycleFinder1 = new EdgeWeightedCycleFinder(weightedDigraph1);
  expect(edgeWeightedCycleFinder1).not.toBe(null);
});

test('Edge weighted digraph', () => {
  let edgeArr = [[4, 5, 0.35], [5, 4, 0.35], [4, 7, 0.37],
  [5, 7, 0.28], [7, 5, 0.28], [5, 1, 0.32], [0, 4, 0.38],
  [0, 2, 0.26], [7, 3, 0.39], [1, 3, 0.29], [2, 7, 0.34], 
  [6, 2, 0.4], [3, 6, 0.52], [6, 0, 0.58], [6, 4, 0.93]];
  let edgeWeightedDigraph1 = new EdgeWeightedDigraph(8);
  for (let i = 0; i <edgeArr.length; i++) {
      let edge = new DirectedEdge(edgeArr[i][0], edgeArr[i][1], edgeArr[i][2]);
      edgeWeightedDigraph1.addEdge(edge);
  }
  expect(edgeWeightedDigraph1.E).toBe(15);
});

// Undirected Graphs

let Graph = Algorithms.Graphs.UndirectedGraphs.Graph;

test('Breadth first paths', () => {
  let BreadthFirstPaths = Algorithms.Graphs.UndirectedGraphs.BreadthFirstPaths;
  let graph1 = new Graph(13);
  let arrEdges = [[0, 5], [4, 3], [0, 1], [9, 12], [6, 4],
  [5, 4], [0, 2], [11, 12], [9, 10], [0,6], [7, 8], [9, 11], [5, 3]];

  for (let i = 0; i < arrEdges.length; i++) {
      graph1.addEdge(arrEdges[i][0], arrEdges[i][1]);
  }
  let breadthFirstPath1 = new BreadthFirstPaths(graph1, 0);
  expect(breadthFirstPath1.hasPathTo(3)).toBe(true);
});

test('Connected components', () => {
  let ConnectedComponents = Algorithms.Graphs.UndirectedGraphs.ConnectedComponents;
  let graph1 = new Graph(13);
  let arrEdges = [[0, 5], [4, 3], [0, 1], [9, 12], [6, 4],
  [5, 4], [0, 2], [11, 12], [9, 10], [0,6], [7, 8], [9, 11], [5, 3]];

  for (let i = 0; i < arrEdges.length; i++) {
      graph1.addEdge(arrEdges[i][0], arrEdges[i][1]);
  }
  let connectedComponents1 = new ConnectedComponents(graph1);
  expect(connectedComponents1.connected(5, 6)).toBe(true);
});

test('Find cycle', () => {
  let Cycle = Algorithms.Graphs.UndirectedGraphs.Cycle;
  let graph1 = new Graph(13);
  let arrEdges = [[0, 5], [4, 3], [0, 1], [9, 12], [6, 4],
  [5, 4], [0, 2], [11, 12], [9, 10], [0,6], [7, 8], [9, 11], [5, 3]];

  for (let i = 0; i < arrEdges.length; i++) {
      graph1.addEdge(arrEdges[i][0], arrEdges[i][1]);
  }
  let cycle1 = new Cycle(graph1);
  expect(cycle1.hasCycle).toBe(true);
});

test('Depth first path', () => {
  let DepthFirstPath = Algorithms.Graphs.UndirectedGraphs.DepthFirstPath;
  let graph1 = new Graph(13);
  let arrEdges = [[0, 5], [4, 3], [0, 1], [9, 12], [6, 4],
  [5, 4], [0, 2], [11, 12], [9, 10], [0,6], [7, 8], [9, 11], [5, 3]];

  for (let i = 0; i < arrEdges.length; i++) {
      graph1.addEdge(arrEdges[i][0], arrEdges[i][1]);
  }
  let depthFirstPath1 = new DepthFirstPath(graph1, 0);
  expect(depthFirstPath1.hasPathTo(6)).toBe(true);
});

test('Depth first search', () => {
  let DepthFirstSearch = Algorithms.Graphs.UndirectedGraphs.DepthFirstSearch;
  let graph1 = new Graph(13);
  let arrEdges = [[0, 5], [4, 3], [0, 1], [9, 12], [6, 4],
  [5, 4], [0, 2], [11, 12], [9, 10], [0,6], [7, 8], [9, 11], [5, 3]];

  for (let i = 0; i < arrEdges.length; i++) {
      graph1.addEdge(arrEdges[i][0], arrEdges[i][1]);
  }
  let dfs1 = new DepthFirstSearch(graph1, 12);
  expect(dfs1.count).toBe(4);
})

test('Is graph bipartite', () => {
  let TwoColor = Algorithms.Graphs.UndirectedGraphs.TwoColor;
  let graph2 = new Graph(9);
  let arrEdges2 = [[0, 1], [0, 3], [1, 2], [1, 4], [2, 5],
  [3, 6], [3, 4], [4, 7], [4, 5], [5, 8], [6, 7], [7, 8]];
  for (let i = 0; i < arrEdges2.length; i++) {
      graph2.addEdge(arrEdges2[i][0], arrEdges2[i][1]);
  }
  let twoColor2 = new TwoColor(graph2);
  expect(twoColor2.isTwoColorable).toBe(true);
});

test('Symbol graph', () => {
  let SymbolGraph = Algorithms.Graphs.UndirectedGraphs.SymbolGraph;
  let arrEdges1 = [["A", "B"], ["A", "C"],
  ["B", "D"], ["B", "E"], ["C", "F"], ["C", "G"]];
  let symbolGraph1 = new SymbolGraph(arrEdges1);
  expect(symbolGraph1.arrKeys).toEqual(["A", "B", "C", "D", "E", "F", "G"]);
});

test('Undirected graph', () => {
  let graph1 = new Graph(13);
  let arrEdges = [[0, 5], [4, 3], [0, 1], [9, 12], [6, 4],
  [5, 4], [0, 2], [11, 12], [9, 10], [0,6], [7, 8], [9, 11], [5, 3]];

  for (let i = 0; i < arrEdges.length; i++) {
      graph1.addEdge(arrEdges[i][0], arrEdges[i][1]);
  }
  expect(graph1.E).toBe(13);
});

//===================================
// Hash Table
//===================================

test('hash function', () => {
  let hashFunction = Algorithms.HashTable.hashFunction;
  let map1 = new Map();

  function hashChar(char) {
      return hashFunction(char, 199, 7);
  }

  for (let i = "A".charCodeAt(0); i < "Z".charCodeAt(0) + 1; i++) {
      let char = String.fromCharCode(i);
      if (map1.has(hashChar(char))) {
          map1.set(hashChar(char), map1.get(hashChar(char)) + 1);
      }
      else {
          map1.set(hashChar(char), 1);
      }
  }
  for (let i = "a".charCodeAt(0); i < "z".charCodeAt(0) + 1; i++) {
      let char = String.fromCharCode(i);
      if (map1.has(hashChar(char))) {
          map1.set(hashChar(char), map1.get(hashChar(char)) + 1);
      }
      else {
          map1.set(hashChar(char), 1);
      }
  }
  let resArr = [[ 2, 8 ], [ 3, 8 ], [ 4, 7 ], [ 5, 7 ], 
                [ 6, 8 ], [ 0, 7 ], [ 1, 7 ]];
  expect([...map1.entries()]).toEqual(resArr);
});

test('Linear probing hash ST', () => {
  let LinearProbingHashST = Algorithms.HashTable.LinearProbingHashST;
  let linearProbingHashST = new LinearProbingHashST(199, 31, 8);
  function random(min, max) {
      return min + Math.floor((max + 1 - min) * Math.random());
  }
  function randomChar(minChar, maxChar) {
      let min = minChar.charCodeAt(0);
      let max = maxChar.charCodeAt(0);
      let randomCharCode = random(min, max);
      return String.fromCharCode(randomCharCode);
  }
  let arrStrings = [];
  let lengthArrStrings = 20;
  for (let i = 0; i < lengthArrStrings; i++) {
      let string = randomChar("A", "Z") + randomChar("A", "Z") + randomChar("A", "Z");
      arrStrings.push(string);
  }
  arrStrings = ["MFY", "AFK", "IGZ", "FCR", "AMH", "FTT", "HPC", "UIY", "AVI", 
  "TFL", "OGE", "WZK", "XIU", "CCN", "MUS", "ABX", "SBL", "GDM", "TEN", "WQK"];
  for (let i = 0; i <lengthArrStrings; i++) {
      linearProbingHashST.put(arrStrings[i], i);
  }
  let resArr = ["MFY", , "GDM", "XIU", "AFK", "MUS", , "HPC", , , ,
    "FCR", "TEN", , "WZK", , , "FTT", , "SBL", "IGZ", "OGE", "WQK",
    "TFL", "AVI", , , "UIY", "CCN", "ABX", "AMH"];
  expect(linearProbingHashST.arrKeys).toEqual(resArr);
});

test('Separate chaining hash ST', () => {
  let SeparateChainingHashST = Algorithms.HashTable.SeparateChainingHashST;
  let separateChainingHashST = new SeparateChainingHashST(7, 31);
  for (let i = "A".charCodeAt(0); i < "Z".charCodeAt(0) + 1; i++) {
      let char = String.fromCharCode(i);
      separateChainingHashST.put(char,i);
  }
  for (let i = "a".charCodeAt(0); i < "z".charCodeAt(0) + 1; i++) {
      let char = String.fromCharCode(i);
      separateChainingHashST.put(char,i);
  }
  expect(separateChainingHashST.has("B")).toBe(true);
});

//===================================
// Other algorithms
//===================================

test('Greatest common divisor', () => {
  expect(Algorithms.OtherAlgorithms.gcd(10, 25)).toBe(5);
})

let arrConnections = [[4, 3], [3, 8], [6, 5], [9, 4], [2, 1],
  [8, 9], [5, 0], [7, 2], [6, 1], [1, 0], [6, 7]];

test('Three sum', () => {
  // not tested yet
  let { threeSum: threeSum, randomArr } = Algorithms.OtherAlgorithms.threeSum;
  for (let i = 100; i < 1000; i+=100) {
    let arr1 = randomArr(i, 10);
    let timeStart = new Date();
    let count1 = threeSum(arr1);
    let timeFinish = new Date();
    let dt = timeFinish - timeStart;
    // console.log(dt);
    // console.log(i ** 3 / count1[1]);
  };
});
  
test('Union Find quick union', () => {
  let UnionFindQuickUnion = Algorithms.OtherAlgorithms.UnionFindQuickUnion;
  let unionFindQuickUnion1 = new UnionFindQuickUnion(10);
  let arrComponents = [1, 1, 1, 8, 3, 0, 5, 1, 8, 8];
  for (let bind in arrConnections) {
      unionFindQuickUnion1.union(arrConnections[bind][0], 
        arrConnections[bind][1]);
  }
  expect(unionFindQuickUnion1.id)
  .toEqual([...arrComponents]);
});

test('Union Find quick search', () => {
  let UnionFindQuickSearch = Algorithms.OtherAlgorithms.UnionFindQuickSearch;
  let unionFindQuickSearch1 = new UnionFindQuickSearch(10);
  let arrComponents = [1, 1, 1, 8, 8, 1, 1, 1, 8, 8];
  for (let bind in arrConnections) {
    unionFindQuickSearch1.union(arrConnections[bind][0],
      arrConnections[bind][1]);
  }
  expect(unionFindQuickSearch1.id)
  .toEqual([...arrComponents]);
})

test('Union Find weighted quick union', () => {
  let UnionFindWeightedQuickUnion = Algorithms.OtherAlgorithms.UnionFindWeightedQuickUnion;
  let unionFindWeightedQuickUnion1 = new UnionFindWeightedQuickUnion(10);
  let arrComponents = [6, 2, 6, 4, 4, 6, 6, 2, 4, 4];
  for (let bind in arrComponents) {
    unionFindWeightedQuickUnion1.union(arrConnections[bind][0],
      arrConnections[bind][1]);
  }
  expect(unionFindWeightedQuickUnion1.id)
  .toEqual([...arrComponents]);
})


//===================================
// Search
//===================================

const numberArr2 = [8, 1, 2, 5, 0, 6, 3, 9, 4, 7];

test('Binary search', () => {
  expect(Algorithms.Search.binarySearch(5, [...numberArr2]))
  .toBe(5); // 5th index in sorted array
});

test('Binary search ST', () => {
  let BinarySearchST = Algorithms.Search.BinarySearchST;
  let binarySearchST1 = new BinarySearchST();
  binarySearchST1.put(4, 3);
  binarySearchST1.put(5, 6);
  binarySearchST1.put(3, 1);
  binarySearchST1.put(4, 10);
  expect(binarySearchST1.minKey()).toBe(3);
});

test('Binarys search tree', () => {
  let BinarySearchTree = Algorithms.Search.BinarySearchTree;
  let binarySearchTree1 = new BinarySearchTree();
  let arr1 = [[15, 0], [9, 1], [23, 2], [3, 3], [12, 4], 
              [17, 5], [28, 6], [8, 7], [2, 8]];
  for (let item in arr1) {
      binarySearchTree1.put(arr1[item][0], arr1[item][1]);
  }
  expect(binarySearchTree1.max()).toBe(28);
});

test('RedBlack BST', () => {
  let RedBlackBST = Algorithms.Search.RedBlackBST;
  let redBlackBST1 = new RedBlackBST();
  let arr1 = ["A", "C", "E", "H", "L", "M", "P", "R", "S", "X"];
  for (let i = 0; i < arr1.length; i++) {
      redBlackBST1.put(arr1[i], i);
  };
  expect(redBlackBST1.root.key).toBe('H');
});

test('Sequential search ST', () => {
  let SequentialSearchST = Algorithms.Search.SequentialSearchST;
  let arr1 = [1, 3, 6, 8, 3, 8];
  let sequentialSearchST1 = new SequentialSearchST();
  for (let i = 0; i < arr1.length; i++) {
      sequentialSearchST1.put(arr1[i], i);
  }
  let generator1 = sequentialSearchST1.generator();
  let str = "";
  for(let item = generator1.next() ; item.done == false; item = generator1.next()) {
      str += item.value + " -> ";
  }
  expect(sequentialSearchST1.get(3)).toBe(4);
});

//===================================
// Sorting
//===================================

const startNumArr = [7, 4, 0, 6, 9, 1, 5, 6, 2, 0, 8, 2, 3];
const finishNumArr = [0, 0, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9];

const fnComparisonNumber = Algorithms.Common.fnComparisonNumber;

test('Heap sort', () => {  
  expect(Algorithms.Sorting.heap(fnComparisonNumber)(
    [...startNumArr]))
  .toEqual([...finishNumArr]);
});

test('Insertion sort', () => {  
  expect(Algorithms.Sorting.Insertion.sort(
    [...startNumArr], 
    fnComparisonNumber))
  .toEqual([...finishNumArr]);
});

test('Merge bottom up', () => {
  expect(Algorithms.Sorting.MergeBottomUp.sort([...startNumArr], fnComparisonNumber))
  .toEqual([...finishNumArr]);
});

test('Merge top down', () => {
  expect(Algorithms.Sorting.MergeTopDown.sort([...startNumArr], fnComparisonNumber))
  .toEqual([...finishNumArr]);
});

test('Quick sort', () => {
  expect(Algorithms.Sorting.quick(fnComparisonNumber)(
    [...startNumArr]))
  .toEqual([...finishNumArr]);
});

test('Quick 3 way sort', () => {
  expect(Algorithms.Sorting.quick(fnComparisonNumber)(
    [...startNumArr]))
  .toEqual([...finishNumArr]);
});

test('Selection sort', () => {  
  expect(Algorithms.Sorting.Selection.sort(
    [...startNumArr], 
    fnComparisonNumber))
  .toEqual([...finishNumArr]);
});

test('Shell sort', () => {
  expect(Algorithms.Sorting.Shell.sort(startNumArr, fnComparisonNumber))
  .toEqual([...finishNumArr]);
});

test('Various keys in array', () => {
  let arr1 = [1, 3, 3, 4, 4, 5, 6];
  expect(Algorithms.Sorting.variousKeys.countingVariosKeys(arr1)).toBe(5);
});

//===================================
// Strings
//===================================

// Alphabet

test('Alphabet', () => {
  let Alphabet = Algorithms.Strings.Alphabet;
  expect(Alphabet.ASCII.contains("A")).toBe(true);
}); 

// Data compression

test('Huffman data compression', () => {
  let Huffman = Algorithms.Strings.DataCompression.HuffMan;
  let huffman = new Huffman("ABRACADABRA!");
  // A = 5, B =2; C = 1; D = 1; R = 2; ! = 1
  huffman.compress();
  let res = 'ABRACADABRA!';
  expect(huffman.expand()).toBe(res);
});

test('Run length codding', () => {
  let RunLengthCoding = Algorithms.Strings.DataCompression.RunLengthCoding;
  let in1 = "0000000000000001111111000000011111111111";
  let resArr = [15, 7, 7, 11];
  expect(RunLengthCoding.compress(in1)).toEqual(resArr); 
}); 

// Regular expressions

test('Nondeterministic finite-state automata', () => {
  let NFA = Algorithms.Strings.RegularExpressions.NFA;
  let nfa1 = new NFA("((A*B|AC)D)");
  let text1 = "AABD";
  expect(nfa1.recognizes(text1)).toBe(true);
}); 

// String sorts

test('Key indexed counting', () => {
  let KeyIndexedCounting = Algorithms.Strings.StringSorts.KeyIndexedCounting;
  let arrWithKey1 = [[2, 'Anderson'], [3, 'Brown'], [3, 'Davis'], [4, 'Garcia'], [1, 'Harris'], 
  [3, 'Jackson'], [4, 'Johnson'], [3, 'Jones'], [1, 'Martin'], [2, 'Martinez'], [2, 'Miller'], 
  [1, 'Moore'], [2, 'Robinson'], [4, 'Smith'], [3, 'Taylor'], [4, 'Thomas'], [4, 'Thompson'], 
  [2, 'White'], [3, 'Williams'], [4, 'Wilson']];
  let keyIndexedCounting1 = new KeyIndexedCounting(arrWithKey1);
  let resArr = [[1, "Harris"], [1, "Martin"], [1, "Moore"], [2, "Anderson"],
  [2, "Martinez"], [2, "Miller"], [2, "Robinson"], [2, "White"], [3, "Brown"],
  [3, "Davis"], [3, "Jackson"], [3, "Jones"], [3, "Taylor"], [3, "Williams"],
  [4, "Garcia"], [4, "Johnson"], [4, "Smith"], [4, "Thomas"], [4, "Thompson"], [4, "Wilson"]];
  expect(arrWithKey1).toEqual(resArr);
});

test('Quick 3 way string sorting', () => {
  let Quick3String = Algorithms.Strings.StringSorts.Quick3String;
  let arrStr1 = ["she", "sells", "seashells", "by",
  "the", "seashore", "the", "shells", "she",
  "sells", "are", "surely", "seashells"];
  let quick3String1 = new Quick3String(arrStr1);
  let resArr = ["are", "by", "seashells", "seashells", "seashore",
  "sells", "sells", "she", "she", "shells", "surely", "the", "the"];
  expect(arrStr1).toEqual(resArr);
});

test('Sort LSD', () => {
  let sortLSD = Algorithms.Strings.StringSorts.sortLSD;
  let arrStr1 = ["4PGC938", "2IYE230", "3CIO720",
  "1ICK750", "1OHV845", "4JZY524", "1ICK750", "3CIO720",
  "1OHV845", "1OHV845", "2RLA629", "2RLA629", "3ATW723"];
  sortLSD(arrStr1, 256);
  let resArr = ["1ICK750", "1ICK750", "1OHV845", "1OHV845",
    "1OHV845", "2IYE230", "2RLA629", "2RLA629", "3ATW723",
    "3CIO720", "3CIO720", "4JZY524", "4PGC938"]
  expect(arrStr1).toEqual(resArr);
});

test('Sort MSD', () => {
  let SortMSD = Algorithms.Strings.StringSorts.SortMSD;
  let arrStr1 = ["she", "sells", "seashells", "by",
  "the", "seashore", "the", "shells", "she",
  "sells", "are", "surely", "seashells"];
  let msd1 = new SortMSD(arrStr1, 256);
  let resArr = ["are", "by", "seashells", "seashells",
    "seashore", "sells", "sells", "she",
    "she", "shells", "surely", "the", "the"];
  expect(arrStr1).toEqual(resArr); 
});

// Substring search

test('Alternate brute-force substring search', () => {
  let alternateBruteForceSubstringSearch = Algorithms.Strings.SubstringSearch.alternateBruteForceSubstringSearch;
  let text1 = "ABACADABRAC";
  let pat1 = "ABRA";
  expect(alternateBruteForceSubstringSearch(pat1, text1)).toBe(6);
});

test('Boyer-Moore substring search', () => {
  let BoyerMoore = Algorithms.Strings.SubstringSearch.BoyerMoore;
  let text1 = "ABACADABRAC";
  let pat1 = "ABRA";
  let boyerMoore1 = new BoyerMoore(pat1);
  expect(boyerMoore1.search(text1)).toBe(6);
}); 

test('Brute-force substring search', () => {
  let bruteForceSubstringSearch = Algorithms.Strings.SubstringSearch.bruteForceSubstringSearch;
  let text1 = "ABACADABRAC";
  let pat1 = "ABRA";
  expect(bruteForceSubstringSearch(pat1, text1)).toBe(6);
});

test('Knuth-Morris-Pratt substring search', () => {
  let KMP = Algorithms.Strings.SubstringSearch.KMP;
  let text1 = "ABACADABRAC";
  let pat1 = "ABRA";
  let kmp1 = new KMP(pat1);
  expect(kmp1.search(text1)).toBe(6);
});

test('Rabin-Karp substring search', () => {
  let RabinKarp = Algorithms.Strings.SubstringSearch.RabinKarp;
  let text1 = "ABACADABRAC";
  let pat1 = "ABRA";
  let rabinkarp1 = new RabinKarp(pat1);
  expect(rabinkarp1.search(text1)).toBe(6);
});

// Trie trees

test('Ternary search tries', () => {
  let TernarySearchTries = Algorithms.Strings.TrieTrees.TernarySearchTries;
  let TST1 = new TernarySearchTries();
  TST1.put("she", 0);
  TST1.put("shells", 1);
  expect(TST1.get("shells")).toBe(1);
});

test('Trie ST', () => {
  let TrieST = Algorithms.Strings.TrieTrees.TrieST;
  let trieST1 = new TrieST();
  trieST1.put("she", 0);
  trieST1.put("shells", 1);
  expect(trieST1.get("shells")).toBe(1);
});


