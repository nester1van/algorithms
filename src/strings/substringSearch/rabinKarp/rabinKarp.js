// поиск подстроки методом Рабина-Карпа

export default class RabinKarp {
  constructor(pat) {
    this.pat = pat;
    this.R = 256;
    this.M = pat.length;
    this.Q = 997;
    this.RM = 1;
    for (let j = 0; j < this.M - 1; j++) {
        this.RM = (this.R * this.RM) % this.Q;
    }
    this.patHash = this.hash(pat, this.M);
  }
  hash(key, M) {
    let hash = 0
    for (let j = 0; j < M; j++) {
      hash = (this.R * hash + key.charCodeAt(j)) % this.Q;
    }
    return hash;
  }
  search(text) {
    let N = text.length;
    let textHash = this.hash(text, this.M);
    if (textHash == this.patHash) return 0;
    for (let i = this.M; i < N; i++) {
      textHash = (textHash + this.Q - this.RM * text.charCodeAt(i - this.M) % this.Q) % this.Q;
      textHash = (textHash * this.R + text.charCodeAt(i)) % this.Q;
      if (textHash == this.patHash) return i - this.M + 1;
    }
    return -1;
  }
};