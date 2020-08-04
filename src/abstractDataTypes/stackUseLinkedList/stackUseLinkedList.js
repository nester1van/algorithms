// стек на основе связного списка
const StackUseLinkedList = (function(){
  class Node {
      constructor(item) {
          this.item = item;
          this.next = null;
      }
  }
  class Stack {
      constructor() {
          this.first = null;
          this.n = 0;
      }
      get isEmpty() {
          return this.n < 1;
      }
      get size() {
          return this.n;
      }
      push(newItem) {
          let oldFirst = this.first;
          this.first = new Node(newItem);
          this.first.next = oldFirst;
          this.n++;
      }
      pop() {
          if (this.isEmpty) {
              throw new Error("Try to pop from empty stack!")
          }
          else {
              let popItem = this.first.item;
              this.first = this.first.next;
              this.n--;
              return popItem;
          }
      }
      * fnGenerator() {
          /*if (this.isEmpty) {
              return null;
          }
          else {
              for (let node = this.first; node !== null; node = node.next) {
                  yield node.item;
              }
          }*/
          for (let node = this.first; node !== null; node = node.next) {
              yield node.item;
          }
      }
      generator() {
          return this.fnGenerator();
      }
  }
  return Stack;    
})();

export default StackUseLinkedList;