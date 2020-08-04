// сортировка слиянием восходящая
export default class MergeBottomUp {
  constructor() {
  }
  static less(a, b, fnComparision) {
      return fnComparision(a, b) < 0;
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
  static isSorted(arr, fnComparision) {
      for (let i = 1; i < arr.length; i++) {
          if (Merge.less(arr[i],arr[i - 1], fnComparision)) {
              return false;
          }
      }
      return true;
  }

  static merge(arr, fnComparision, tempArr, lo, mid, hi) {
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
          else if (Merge.less(tempArr[i], tempArr[j], fnComparision)) {
              arr[k] = tempArr[i++];
          }
          else {arr[k] = tempArr[j++];     }
      }
  }

  static sort(arr, fnComparision) {
      let l = arr.length;
      let tempArr = [];
      for (let sz = 1; sz < l; sz += sz) {
          for (let lo = 0; lo < l - sz; lo += 2 * sz) {
              Merge.merge(arr, fnComparision, tempArr, lo, lo + sz - 1, Math.min(lo + 2 * sz - 1, l - 1));
          }
      }
  }


}
