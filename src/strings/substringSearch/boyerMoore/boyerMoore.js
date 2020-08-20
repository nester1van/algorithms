// поиск подстроки методом Бойера-Мура

export default class BoyerMoore {
  constructor(pat) {
    this.pat = pat;
    this.R = 256;
    this.M = pat.length;
    this.right = [];
    for (let c = 0; c < this.R; c++) {
      this.right[c] = -1;
    }
    for (let j = 0; j < this.M; j++) {
      this.right[pat.charCodeAt(j)] = j;
    }
  }
  search(text) {
    let N = text.length;
    let skip;
    for (let i = 0; i < N - this.M; i += skip) {
      skip = 0;
      for (let j = this.M - 1; j >= 0; j--) {
        if (text.charCodeAt(i + j) != this.pat.charCodeAt(j)) {
          skip = j - this.right[text.charCodeAt(i + j)];
          if (skip < 1) {
            skip = 1;
          }
          break;
        }
      }
      if (skip == 0) return i;
    }
    return -1;
  }
};