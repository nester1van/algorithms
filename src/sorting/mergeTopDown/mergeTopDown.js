// сортировка слиянием нисходящая
export default class MergeTopDown {
  constructor() {
  }
  static less(a, b, fnComparison) {
      return fnComparison(a, b) < 0;
  }
  static exch(arr, i, j) {
      if (i == j) return;
      let temp = arr[i]; 
      arr[i] = arr[j];
      arr[j] = temp;
  }
  static show(arr) {
      console.log(arr);
  }
  static isSorted(arr, fnComparison) {
      for (let i = 1; i < arr.length; i++) {
          if (MergeTopDown.less(arr[i],arr[i - 1], fnComparison)) {
              return false;
          }
      }
      return true;
  }

  static merge(arr, fnComparison, tempArr, lo, mid, hi) {
      let i = lo;
      let j = mid + 1;
      for (let k = lo; k <= hi; k++) {
          tempArr[k] = arr[k];
      }
      for (let k = lo; k <= hi; k++) {
          if (i > mid) {
              arr[k] = tempArr[j++];
          }
          else if (j > hi) {
              arr[k] = tempArr[i++];
          }
          else if (MergeTopDown.less(tempArr[i], tempArr[j], fnComparison)) {
              arr[k] = tempArr[i++];
          }
          else {arr[k] = tempArr[j++];     }
      }
  }

  static sort(arr, fnComparison) {
      let tempArr = [];
      MergeTopDown._sort(arr, fnComparison, tempArr, 0, arr.length - 1);
      return arr;
  }

  static _sort(arr, fnComparison, tempArr, lo, hi) {
      if (hi <= lo) return;
      let mid = lo + Math.floor((hi - lo) / 2);
      MergeTopDown._sort(arr, fnComparison, tempArr, lo, mid);
      MergeTopDown._sort(arr, fnComparison, tempArr, mid + 1, hi);
      MergeTopDown.merge(arr, fnComparison, tempArr, lo, mid, hi);
  }
}