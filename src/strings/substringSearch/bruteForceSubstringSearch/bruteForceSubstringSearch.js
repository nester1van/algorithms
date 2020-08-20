// примитивный поиск подстроки

export default function bruteForceSubstringSearch(pat, text) {
  let M = pat.length;
  let N = text.length;
  for (let i = 0; i < N - M; i++) {
    let j;
    for (j = 0; j < M; j++) {
      if (pat.charCodeAt(j) != text.charCodeAt(i + j)) break;
    }
    if (j == M) return i;
  }
  return -1;
};