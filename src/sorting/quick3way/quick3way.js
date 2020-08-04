// быстрая сортировка с трехчастным разбиением
const quick3way = (function(fnComparision) {
  function exch(arr, i, j) {
      if (i == j) return;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  function startSort(arr) {
      shuffle(arr);
      sort(arr, 0, arr.length - 1);
  }
  function sort(arr, lo, hi) {
      if (lo >= hi) return;
      let lt = lo;
      let i = lo + 1;
      let gt = hi;
      let v = arr[lo];
      while (i <= gt) {
          if (fnComparision(arr[i], v) < 0) exch(arr, i++, lt++);
          else if (fnComparision(arr[i], v) > 0) exch(arr, i, gt--);
          else i++;
      }
      sort(arr, lo, lt - 1);
      sort(arr, gt + 1, hi);
  }

  return {
      sort: startSort
  }

})(fnComparisionNumber);

export default quick3way;