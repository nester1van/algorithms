import Algorithms from './algorithms';

//===================================
// Common 
//===================================

const numberArr = [0, 0, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9];

test('Function comparsion of two numbers', () => {
  expect(Algorithms.Common.fnComparisionNumber(4, 5))
  .toBe(-1);
});

test('Function comparsion of two strings', () => {
  expect(Algorithms.Common.fnComparisionNumber('a', 'B'))
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

// Shortest Path

// Undirected Graphs


//===================================
// Other algorithms
//===================================

test('greatest common divisor', () => {
  expect(Algorithms.OtherAlgorithms.gcd(10, 25)).toBe(5);
})

let arrConnections = [[4, 3], [3, 8], [6, 5], [9, 4], [2, 1],
  [8, 9], [5, 0], [7, 2], [6, 1], [1, 0], [6, 7]];


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

//===================================
// Sorting
//===================================

const startNumArr = [7, 4, 0, 6, 9, 1, 5, 6, 2, 0, 8, 2, 3];
const finishNumArr = [0, 0, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9];

const fnComparisionNumber = Algorithms.Common.fnComparisionNumber;

test('Heap sort', () => {  
  expect(Algorithms.Sorting.heap(fnComparisionNumber)(
    [...startNumArr]))
  .toEqual([...finishNumArr]);
});

test('Insertion sort', () => {  
  expect(Algorithms.Sorting.Insertion.sort(
    [...startNumArr], 
    fnComparisionNumber))
  .toEqual([...finishNumArr]);
});

test('Merge bottom up', () => {
  expect(Algorithms.Sorting.MergeBottomUp.sort([...startNumArr], fnComparisionNumber))
  .toEqual([...finishNumArr]);
});

test('Merge top down', () => {
  expect(Algorithms.Sorting.MergeTopDown.sort([...startNumArr], fnComparisionNumber))
  .toEqual([...finishNumArr]);
});

test('Quick sort', () => {
  expect(Algorithms.Sorting.quick(fnComparisionNumber)(
    [...startNumArr]))
  .toEqual([...finishNumArr]);
});

test('Quick 3 way sort', () => {
  expect(Algorithms.Sorting.quick(fnComparisionNumber)(
    [...startNumArr]))
  .toEqual([...finishNumArr]);
});

test('Selection sort', () => {  
  expect(Algorithms.Sorting.Selection.sort(
    [...startNumArr], 
    fnComparisionNumber))
  .toEqual([...finishNumArr]);
});

test('Shell sort', () => {
  expect(Algorithms.Sorting.Shell.sort(startNumArr, fnComparisionNumber))
  .toEqual([...finishNumArr]);
});



