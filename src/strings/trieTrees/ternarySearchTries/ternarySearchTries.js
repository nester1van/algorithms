// таблица имен на основе trie-деревьев тренарного поиска
const TernarySearchTries = (function(){
  class Node {
    constructor(charCode, value) {
        this.charCode = charCode;
        this.value = value;
        this.left = null;
        this.middle = null;
        this.right = null;
    }
  };
  class TST {
    constructor() {
        this.root = null;
    }
    put(key, value) {
        this.root = this._put(this.root ,key, value, 0);
    }
    _put(currentNode, key, value, d) {
        let charCode = key.charCodeAt(d);
        if (currentNode == null) {
            currentNode = new Node(charCode);
        }
        if (charCode < currentNode.charCode) {
            currentNode.left = this._put(currentNode.left, key, value, d);
        }
        else if (charCode > currentNode.charCode) {
            currentNode.right = this._put(currentNode.right, key, value, d);
        }
        else if (d + 1 < key.length) {
            currentNode.middle = this._put(currentNode.middle, key, value, d + 1);
        }
        else {
            currentNode.value = value;
        }
        return currentNode;
    }
    get(key) {
        let searchNode = this._get(this.root, key, 0);
        if (searchNode == null) return null;
        return searchNode.value;
    }
    _get(currentNode, key, d) {
        if (currentNode == null) return null;
        let charCode = key.charCodeAt(d);
        if (charCode < currentNode.charCode) {
            return this._get(currentNode.left, key, d);
        } 
        else if (charCode > currentNode.charCode) {
            return this._get(currentNode.right, key, d);
        }
        else if (d + 1 < key.length) {
            return this._get(currentNode.middle, key, d + 1);
        }
        else return currentNode;
    }
  };
  return TST;
})();

export default TernarySearchTries;