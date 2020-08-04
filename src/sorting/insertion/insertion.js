// Сортировка вставками
export default class Insertion {
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
          if (Insertion.less(arr[i],arr[i - 1], fnComparision)) {
              return false;
          }
      }
      return true;
  }
  static sort(arr, fnComparision) {
      let l = arr.length;
      for (let i = 1; i < l; i++) {
          for (let j = i; j > 0 && Insertion.less(arr[j], arr[j-1], fnComparision); j--) {
              Insertion.exch(arr, j, j-1);
          }
      } 
  }
}