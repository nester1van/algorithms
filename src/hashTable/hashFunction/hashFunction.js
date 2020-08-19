// хеш-функция
export default function hashFunction(string, r, m) {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
      hash = (hash * r + string.charCodeAt(i)) % m;
  }
  return hash;
};