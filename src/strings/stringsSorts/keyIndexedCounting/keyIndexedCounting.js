// распределяющий подсчет
export default class KeyIndexedCounting {
  constructor(arrWithKey) {
      this.tempArr = [];
      this.countArr = [];
      this.countArr[0] = 0;
      this.countArr[1] = 0;
      for (let i = 0; i < arrWithKey.length; i++) {
          let key = arrWithKey[i][0];
          if (this.countArr[key + 1] == undefined) {
              this.countArr[key + 1] = 1;
          }
          else this.countArr[key + 1]++;
      }
      for (let r = 0; r < this.countArr.length - 1; r++) {
          this.countArr[r + 1] += this.countArr[r];
      }
      for (let i = 0; i < arrWithKey.length; i++) {
          this.tempArr[this.countArr[arrWithKey[i][0]]++] = arrWithKey[i];
      }
      for (let i = 0; i < arrWithKey.length; i++) {
          arrWithKey[i] = this.tempArr[i];
      }
  }
};