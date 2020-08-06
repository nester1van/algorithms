export default function binarySearch(key, arr) {
  arr.sort((a, b) => a - b);
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
      let middle = low + Math.floor((high - low) / 2);
      if (key < arr[middle]) {high = middle - 1;}
      else if (key > arr[middle]) {low = middle + 1;}
      else {return middle}
  }
  return -1;
};