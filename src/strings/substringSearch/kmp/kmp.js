// поиск подстроки методом Кнута-Морриса-Пратта
export default class KMP {
  constructor(pat) {
      this.R = 256;
      this.M = pat.length;
      this.dfa = [];
      for (let i = 0; i < this.R; i++) {
          this.dfa[i] = [];
          for (let j = 0; j < this.M; j++) {
              this.dfa[i][j] = 0;
          }
      }
      this.dfa[pat.charCodeAt(0)][0] = 1;
      for (let X = 0, j = 1; j < this.M; j++) {
          for (let c = 0; c < this.R; c++) {
              this.dfa[c][j] = this.dfa[c][X];
              this.dfa[pat.charCodeAt(j)][j] = j + 1;
              X = this.dfa[pat.charCodeAt(j)][X];
          }
      }
  }
  search(text) {
      let i, j, N = text.length;
      for (i = 0, j = 0; i < N && j < this.M; i++) {
          j = this.dfa[text.charCodeAt(i)][j];
      }
      if (j == this.M) return i - this.M;
      else return -1;  
  }
};