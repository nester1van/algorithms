// кодирование по длинам серий
export default class RunLengthCoding {
  constructor() {}
  static compress(binString) {
      let cnt = 0;
      let arrCnt = [];
      let i = 0;
      if (binString[0] == "1") {
          arrCnt.push(0);
      }
      for (let i = 0; i < binString.length; i++) {
          cnt++;
          if(binString[i] != binString[i+1]){
              arrCnt.push(cnt);
              cnt = 0;
          }
      }
      return arrCnt;
  }
  static expand(arrCnt) {
      let binString = "";
      for (let i = 0; i < arrCnt.length; i++) {
          if (i % 2 == 0) {
              let num0 = arrCnt[i];
              binString += "0".repeat(num0);
          }
          else {
              let num1 = arrCnt[i];
              binString += "1".repeat(num1);
          }
      }
      return binString;
  }
};
