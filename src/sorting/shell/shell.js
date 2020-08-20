// сортировка Шелла
export default class Shell {
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
          if (Shell.less(arr[i],arr[i - 1], fnComparison)) {
              return false;
          }
      }
      return true;
  }
  static sort(arr, fnComparison) {
      let l = arr.length;
      let h = 1;
      while (h <= l/3) {
          h = h * 3 + 1;
      }
      while (h >= 1) {
          for (let i = h; i < l; i++) {
              for (let j = i; j >= h && Shell.less(arr[j], arr[j - h], fnComparison); j -= h) {
                  Shell.exch(arr, j, j - h);
              }
          }
          h = Math.floor(h / 3);
      }
      return arr;
  }
}