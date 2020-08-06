// алгоритм Евклида(поиск наибольшего общего делителя двух чисел)
export default function gcd(x, y) {
  if (y == 0) return x;
  let r = x % y;
  return gcd(y, r);
}