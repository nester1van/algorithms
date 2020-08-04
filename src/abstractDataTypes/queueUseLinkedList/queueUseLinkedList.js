// очередь на основе связного списка
const QueueUseLinkedList = (function(){
  class Node {
      constructor(item) {
          this.item = item;
          this.next = null;
      }
  }
  class Queue {
      constructor() {
          this.first = null;
          this.last = null;
          this.n = 0;
      }
      get isEmpty() {
          return this.n < 1;
      }
      get size() {
          return this.n;
      }
      enqueue(newItem) {
  
          if (this.isEmpty) {
              let firstNode = new Node(newItem);
              this.first = firstNode;
              this.last = firstNode; 
          }
          else {
              let oldLast = this.last;
              this.last = new Node(newItem);
              oldLast.next = this.last;
          }
          this.n++; 
      }
      dequeue() {
          if (this.isEmpty) {
              throw new Error("Try to dequeue from empty queue!");
          }
          else if (this.n == 1) {
              let item = this.first.item;
              this.first = null;
              this.last = null;
              this.n--;
              return item;
          }
          else {
              let item = this.first.item;
              this.first = this.first.next;
              this.n--;
              return item;
          }
      }
      * fnGenerator() {
          for (let node = this.first; node !== null; node = node.next) {
              yield node.item;
          }
      }
      generator() {
          return this.fnGenerator();
      }
  } 
  return Queue;
})();

export default QueueUseLinkedList;