// сортировка по младшим разрядам LSD
export default function sortLSD(arrStr, R) {
  let tempArr = [];
  let W = arrStr[0].length;
  let N = arrStr.length;
  for (let d = W - 1; d >= 0; d--) {
    let count = [];
    for (let i = 0; i < R + 1; i++) {
      count[i] = 0;
    }
    for (let i = 0; i < N; i++) {
      count[arrStr[i].charCodeAt(d) + 1]++;
    }
    for (let r = 0; r < R; r++) {
      count[r + 1] += count[r];
    }
    for (let i = 0; i < N; i++) {
      tempArr[count[arrStr[i].charCodeAt(d)]++] = arrStr[i];
    }
    for (let i = 0; i < N; i++) {
      arrStr[i] = tempArr[i];
    }
  }
};