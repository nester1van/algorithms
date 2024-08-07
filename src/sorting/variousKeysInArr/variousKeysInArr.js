// подсчет различных ключей в массиве

import quick3way from '../quick3way/quick3way';
import { fnComparisonNumber } from '../../common/fnComparison/fnComparison';

const variousKeys = (function(fnComparison){
  function hasSameKeys(sortedArr) {
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (fnComparison(sortedArr[i], sortedArr[i + 1]) == 0) {
        return true;
      }
    }
    return false;
  }
  function countingVariosKeys(sortedArr) {
    let count = 1;
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (fnComparison(sortedArr[i], sortedArr[i + 1]) != 0) {
        count++;
      }
    }
    return count;
  }
  function uniqueValues(sortedArr) {
    let set = new Set(sortedArr);
    return set;
  }
  function mostRepetetiveValue(sortedArr) {
    let map = new Map();
    for (i = 0; i < sortedArr.length; i++) {
      if (map.has(sortedArr[i])) {
        map.set(sortedArr[i], map.get(sortedArr[i]) + 1);
      }
      else {
        map.set(sortedArr[i], 1);
      }
    }
    let arr = [];
    function fnForEach(value, key, map) {
      arr.push([key, value]);
    }
    map.forEach(fnForEach);
    function fnComparisonArray(a, b) {
      if (a[1] > b[1]) return 1;
      else if (a[1] < b[1]) return -1;
      else return 0;
    }
    quick3way(fnComparisonArray).sort(arr);
    let mostRepetetiveValue = [];
    for (let i = arr.length -1; i > -1; i--) {
      if (fnComparisionArray(arr[arr.length - 1], arr[i]) == 0) {
        mostRepetetiveValue.push(arr[i][0]);
      }
      else break;
    }
    return mostRepetetiveValue;
  }
  return {
    hasSameKeys: hasSameKeys,
    countingVariosKeys: countingVariosKeys,
    uniqueValues: uniqueValues,
    mostRepetetiveValue: mostRepetetiveValue
  }
})(fnComparisonNumber);

export default variousKeys;