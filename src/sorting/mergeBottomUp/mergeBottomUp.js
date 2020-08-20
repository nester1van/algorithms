// сортировка слиянием восходящая
export default class MergeBottomUp {
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
          if (MergeBottomUp.less(arr[i],arr[i - 1], fnComparison)) {
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
          else if (MergeBottomUp.less(tempArr[i], tempArr[j], fnComparison)) {
              arr[k] = tempArr[i++];
          }
          else {arr[k] = tempArr[j++];     }
      }
  }

  static sort(arr, fnComparison) {
      let l = arr.length;
      let tempArr = [];
      for (let sz = 1; sz < l; sz += sz) {
          for (let lo = 0; lo < l - sz; lo += 2 * sz) {
              MergeBottomUp.merge(arr, fnComparison, tempArr, lo, lo + sz - 1, Math.min(lo + 2 * sz - 1, l - 1));
          }
      }
      return arr;
  }
}
