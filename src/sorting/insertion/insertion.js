// Сортировка вставками

export default class Insertion {
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
      if (Insertion.less(arr[i],arr[i - 1], fnComparison)) {
        return false;
      }
    }
    return true;
  }
  static sort(arr, fnComparison) {
    let l = arr.length;
    for (let i = 1; i < l; i++) {
      for (let j = i; j > 0 && Insertion.less(arr[j], arr[j-1], fnComparison); j--) {
        Insertion.exch(arr, j, j-1);
      }
    } 
    return arr;
  }
};