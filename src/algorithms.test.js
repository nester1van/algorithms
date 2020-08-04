import Algorithms from './algorithms';

//===================================
// Sorting
//===================================

const startNumArr = [3, 0, 2, 1];
const finishNumArr = [0, 1, 2, 3];

test('Selection sort', () => {  
  expect(Algorithms.Sorting.Selection.sort(
    [...startNumArr], 
    Algorithms.Common.fnComparisionNumber))
  .toEqual([...finishNumArr]);
});

test('Insertion sort', () => {  
  expect(Algorithms.Sorting.Insertion.sort(
    [...startNumArr], 
    Algorithms.Common.fnComparisionNumber))
  .toEqual([...finishNumArr]);
});