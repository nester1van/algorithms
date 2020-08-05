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




