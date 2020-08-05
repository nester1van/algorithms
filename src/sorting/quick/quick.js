import shuffle from '../../common/shuffledArray/shuffledArray';
// быстрая сортировка
const quick = (function(shuffle){
    function quick(fnComparision) {
        function less(a, b) {
            return fnComparision(a, b) < 0;
        }
        function exch(arr, i, j) {
            if (i == j) return;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        function startSort(arr) {
            shuffle(arr);
            sort(arr, 0, arr.length - 1);
            return arr;
        }
        function sort(arr, lo, hi) {
            if (lo >= hi) return;
            let j = partition(arr, lo, hi);
            sort(arr, lo, j - 1);
            sort(arr, j + 1, hi);
        }
        function partition(arr, lo, hi) {
            let i = lo;
            let j = hi + 1;
            let v = arr[lo];
            while (true) {
                while (less(arr[++i], v)) if (i == hi) break;
                while (less(v, arr[--j])) if (j == lo) break;
                if (i >= j) break;
                exch (arr, i, j);
            }
            exch(arr, lo, j);
            return j;
        }
        return startSort;
    };
    return quick;
})(shuffle);


export default quick;