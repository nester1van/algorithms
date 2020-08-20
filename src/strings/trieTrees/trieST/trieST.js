// таблица имен на основе trie-дерева

const TrieST = (function(){
  class Node {
    constructor(value) {
      this.value = value;
      this.next = [];
    }
  };
  class TrieST {
    constructor() {
      this.root = new Node();
    }
    put(key, value) {
      this.root = this._put(this.root, key, value, 0);
    }
    _put(currentNode, key, value, d) {
      if (currentNode == null) {
        currentNode = new Node();
      }
      if (d == key.length) {
        currentNode.value = value;
        return currentNode;
      }
      let charCode = key.charCodeAt(d);
      currentNode.next[charCode] = this._put(currentNode.next[charCode], key, value, d + 1);
      return currentNode;
    }
    get(key) {
      let searchNode = this._get(this.root, key, 0);
      if (searchNode == null) return null;
      return searchNode.value;
    }
    _get(currentNode, key, d) {
      if (currentNode == null) return null;
      if (d == key.length) return currentNode;
      let charCode = key.charCodeAt(d);
      return this._get(currentNode.next[charCode], key, d + 1);
    }
    longestPrefixOf(str) {
      let length = this.search(this.root, str, 0, 0);
      return str.substr(0, length);
    }
    search(currentNode, str, d, length) {
      if (currentNode == null) return length;
      if (currentNode.value != null) length = d;
      if (d == str.length) return length;
      let charCode = str.charCodeAt(d);
      return this.search(currentNode.next[charCode], str, d + 1, length);
    }
    delete(key) {
      this.root = this._delete(this.root, key, 0);
    }
    _delete(currentNode, key, d) {
      if (currentNode == null) return null;
      if (d == key.length) {
        currentNode.value = null;
      }
      else {
        let charCode = key.charCodeAt(d);
        currentNode.next[charCode] = this._delete(currentNode.next[charCode], key, d + 1);
      }
      return currentNode;
    }
  };  
  return TrieST;
})();

export default TrieST;