// сортировка выбором

export default class Selection {
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
    return arr;
  }
  static isSorted(arr, fnComparison) {
    for (let i = 1; i < arr.length; i++) {
      if (Selection.less(arr[i],arr[i - 1], fnComparison)) {
        return false;
      }
    }
    return true;
  }
  static sort(arr, fnComparison) {
    let l = arr.length;
    for (let i = 0; i < l; i++) {
      let min = i;
      for (let j = i + 1; j < l; j++) {
        if (Selection.less(arr[j], arr[min], fnComparison)) {
          min = j;
        }
      }
      Selection.exch(arr, min, i);
    }
    return arr;
  }
};

