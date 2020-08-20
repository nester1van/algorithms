// сортировка по старшим разрядам MSD
function insertionSortStr(arrStr, lo, hi, d) {
  for (let i = lo; i <= hi; i++) {
    for (let j = i; j > lo && less(arrStr[j], arrStr[j - 1], d); j--) {
      exch(j, j - 1);
    }
  }
  function less(str1, str2, d) {
    return charAt(str1, d) < charAt(str2, d);
  }
  function charAt(str, d) {
    if (d < str.length) return str.charCodeAt(d);
    return -1;
  }
  function exch(i, j) {
    let temp = arrStr[i];
    arrStr[i] = arrStr[j];
    arrStr[j] = temp;
  }
}
export default class sortMSD {
  constructor(arrStr, R) {
    this.R = R;
    this.M = 0;
    this.temp = [];
    this.sort(arrStr, 0, arrStr.length - 1, 0);
  }
  charAt(str, d) {
    if (d < str.length) return str.charCodeAt(d);
    else return -1;
  }
  sort(arrStr, lo, hi, d) {
    if (hi <= lo + this.M) {
      insertionSortStr(arrStr, lo, hi, d);
      return;
    }
    let count = [];
    for (let i = 0; i < this.R + 2; i++) {
      count[i] = 0;
    }
    for (let i = lo; i <= hi; i++) {
      count[this.charAt(arrStr[i], d) + 2]++;
    }
    for (let r = 0; r < this.R + 1; r++) {
      count[r + 1] += count[r];
    }
    for (let i = lo; i <= hi; i++) {
      this.temp[count[this.charAt(arrStr[i], d) + 1]++] = arrStr[i];
    }
    for (let i = lo; i <= hi; i++) {
      arrStr[i] = this.temp[i - lo];
    }
    for (let r = 0; r < this.R; r++) {
      this.sort(arrStr, lo + count[r], lo + count[r + 1] - 1, d + 1);
    }
  }
};