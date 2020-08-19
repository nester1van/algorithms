// последовательный поиск в неупорядоченном связном списке
const SequentialSearchST = (function(){
  class Node{
    constructor(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
  }
  class SequentialSearchST {
    constructor() {
       this.first = null; 
       this.size = 0;
    }
    put(key, value) {
        for (let currentNode = this.first; currentNode != null; currentNode = currentNode.next) {
            if (currentNode.key == key) {
                currentNode.value = value;
                return;
            }    
        }
        this.first = new Node(key, value, this.first);
        this.size++;
    }
    get(key) {
        for (let currentNode = this.first; currentNode != null; currentNode = currentNode.next) {
            if (currentNode.key == key) {
                return currentNode.value;
            }
        }
        return null;
    }
    keys() {
        let arr = [];
        for(let currentNode = this.first; currentNode != null; currentNode = currentNode.next) {
            arr.push([currentNode.key, currentNode.value]);
        }
        return arr;
    }
    delete(key) {
        for(let currentNode = this.first; currentNode !== null; currentNode = currentNode.next) {
            if (currentNode == this.first && currentNode.key == key) {
                this.first = currentNode.next;
                return true;
            }
            if (currentNode.next != null && currentNode.next.key == key) {
                let nextNode = currentNode.next;
                currentNode.next = nextNode.next;
                return true;
            }
        }
        return false;
    }
    * fnGenerator() {
        for (let currentNode = this.first; currentNode != null; currentNode = currentNode.next) {
            yield [currentNode.key, currentNode.value];
        }
    }
    generator() {
        return this.fnGenerator();
    }
  };
  return SequentialSearchST;
})();

export default SequentialSearchST;
 
