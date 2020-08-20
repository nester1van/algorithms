// пирамидальная сортировка

function heap(fnComparison){
  function less(a, b) {
    return fnComparison(a, b) < 0;
  }
  function exch(arr, i, j) {
    if (i == j) return;
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  function sink(arr, k, n) {
    while (2 * k <= n) {
      let j = 2 * k;
      if (j < n && less(arr[j], arr[j + 1])) j++;
      if (!less(arr[k], arr[j])) break;
      exch(arr, j, k);
      k = j;
    }
  }
  function sort(arr) {
    arr.unshift("start");
    let n = arr.length - 1;
    for (let k = Math.floor(n / 2); k >= 1; k--) {
      sink(arr, k, n);
    }
    while (n > 1) {
      exch(arr, 1, n--);
      sink(arr, 1, n);
    }
    arr.shift();
    return arr;
  }
  return sort;
};

export default heap;