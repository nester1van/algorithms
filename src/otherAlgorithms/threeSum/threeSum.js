// сумма трех чисел
const threeSum = (function(){
  function threeSum(arr) {
    let l = arr.length;
    let count = 0;
    let allCount = 0;
    for (let i = 0; i < l; i++) {
        for (let j = i + 1; j < l; j++) {
            for (let k = j + 1; k < l; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {
                    count++;
                }
                allCount++;
            }
        }
    }
    return [count, allCount];
  };
  
  function randomArr(n, m) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = randomInteger(-m, m + 1);
    }
    return arr;
  };
  
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  return {
    threeSum,
    randomArr,
    randomInteger
  }
})();

export default threeSum;
