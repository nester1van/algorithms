import Algorithms from './algorithms';

//===================================
// common 
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
// Other algorithms
//===================================

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



