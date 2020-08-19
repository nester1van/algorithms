// трехчастная быстрая сортировка строк
export default class Quick3String {
  constructor(arrStr) {
      this.sort(arrStr, 0, arrStr.length - 1, 0);
  }
  charAt(str, d) {
      if (d < str.length) return str.charCodeAt(d);
      else return -1;
  }
  exch(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  sort(arrStr, lo, hi, d) {
      if (hi <= lo) return;
      let lt = lo;
      let gt = hi;
      let v = this.charAt(arrStr[lo], d);
      let i = lo + 1;
      while (i <= gt) {
          let t = this.charAt(arrStr[i], d);
          if (t < v) this.exch(arrStr, lt++, i++);
          else if (t > v) this.exch(arrStr, i, gt--);
          else i++;
      }
      this.sort(arrStr, lo, lt - 1, d);
      if (v >= 0) this.sort(arrStr, lt, gt, d + 1);
      this.sort(arrStr, gt + 1, hi, d);
  }
};