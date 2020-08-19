// альтернативная реализация примитивного поиска подстроки
export default function alternateBruteForceSubstringSearch(pat, text) {
  let M = pat.length;
  let N = text.length;
  let i, j;
  for (i = 0, j = 0; i < N && j < M; i++) {
      if (text.charCodeAt(i) == pat.charCodeAt(j)) {
          j++;
      }
      else i -= j, j = 0;
  }
  if (j == M) return i - M;
  return -1;
};