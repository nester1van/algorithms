// дерево бинарного поиска

import Queue from '../../abstractDataTypes/queueUseLinkedList/queueUseLinkedList';

const BinarySearchTree = (function(){
  class Node {
    constructor(key, value, n) {
      this.key = key;
      this.value = value;
      this.left = null;
      this.right = null;
      this.n = n;
    }
  }
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    size() {
      return this._size(this.root);
    }
    _size(currentNode) {
      if (currentNode == null) return 0;
      return currentNode.n;
    }
    get(key) {
      return this._get(this.root, key);
    }
    _get(currentNode, key) {
      if (currentNode == null) return null;
      if (key > currentNode.key) return this._get(currentNode.right, key);
      else if (key < currentNode.key) return this._get(currentNode.left, key);
      else return currentNode.value;
    }
    put(key, value) {
      this.root = this._put(this.root, key, value);
    }
    _put(currentNode, key, value) {
      if (currentNode == null) return new Node(key, value, 1);
      if (key > currentNode.key) currentNode.right = this._put(currentNode.right, key, value);
      else if (key < currentNode.key) currentNode.left = this._put(currentNode.left, key, value);
      else currentNode.value = value;
      currentNode.n = this._size(currentNode.left) + this._size(currentNode.right) + 1;
      return currentNode;
    }
    min() {
      if (this.root == null) return null;
      return this._min(this.root).key;
    }
    _min(currentNode) {
      if (currentNode.left == null) return currentNode;
      return this._min(currentNode.left);
    }
    max() {
      if (this.root == null) return null;
      return this._max(this.root).key;
    }
    _max(currentNode) {
      if (currentNode.right == null) return currentNode;
      return this._max(currentNode.right);
    }
    floor(key) {
      let currentNode = this._floor(root, key);
      if (currentNode == null) return null;
      return currentNode.key;
    }
    _floor(currentNode, key) {
      if (currentNode == null) return null;
      if (key == currentNode.key) return currentNode;
      if (key < currentNode.key) return this._floor(currentNode.left, key);
      let t = this._floor(currentNode.right, key);
      if (t != null) return t;
      else return currentNode;
    }
    ceiling(key) {
      let currentNode = this._ceiling(root, key);
      if (currentNode == null) return null;
      return currentNode.key;
    }
    _ceiling(currentNode, key) {
      if (currentNode = null) return null;
      if (key == currentNode.key) return currentNode;
      if (key > currentNode.key) return this._ceiling(currentNode.right, key);
      let t = this._ceiling(currentNode.left, key);
      if (t != null) return t;
      else return currentNode;
    }
    select(r) {
      return this._select(this.root, r);
    }
    _select(currentNode, r) {
      if (currentNode == null) return null;
      let sz = this._size(currentNode.left);
      if (sz > r) return this._select(currentNode.left, r);
      else if (sz < r) return this._select(currentNode.right, r - sz - 1);
      else return currentNode;
    }
    rank(key) {
      return this._rank(key, this.root);
    }
    _rank(key, currentNode) {
      if (currentNode == null) return 0;
      if (key < currentNode.key) return this._rank(key, currentNode.left);
      else if (key > currentNode.key) return 1 + this._size(currentNode.left) + this._rank(key, currentNode.right);
      else return this._size(currentNode.left);
    }
    deleteMin() {
      this.root = this._deleteMin(this.root);
    }
    _deleteMin(currentNode) {
      if (currentNode.left == null) return currentNode.right;
      currentNode.left = this._deleteMin(currentNode.left);
      currentNode.n = this._size(currentNode.left) + this._size(currentNode.right) + 1;
      return currentNode;
    }
    print(currentNode) {
      if (currentNode == null) return;
      this.print(currentNode.left);
      console.log(currentNode.key);
      this.print(currentNode.right);
    }
    delete(key) {
      this.root = this._delete(this.root, key);
    }
    _delete(currentNode, key) {
      if (currentNode == null) return null;
      if (key < currentNode.key) currentNode.left = this._delete(currentNode.left, key);
      else if (key > currentNode.key) currentNode.right = this._delete(currentNode.right, key);
      else {
        if (currentNode.left == null) return currentNode.right;
        if (currentNode.right == null) return currentNode.left;
        let deletedNode = currentNode;
        currentNode = this._min(deletedNode.right);// текущим узлом становится преемник
        currentNode.right = this._deleteMin(deletedNode.right);
        currentNode.left = deletedNode.left;
        }
      currentNode.n = this._size(currentNode.left) + this._size(currentNode.right) + 1;
      return currentNode;
    }
    keys(lo, hi) {
      let queue = new Queue();
      this._keys(this.root, queue, lo, hi);
      return queue;
    }
    _keys(currentNode, queue, lo, hi) {
      if (currentNode == null) return;
      if (lo < currentNode.key) this._keys(currentNode.left, queue, lo, hi);
      if (lo <= currentNode.key && hi >= currentNode.key) queue.enqueue(currentNode.key);
      if (hi > currentNode.key) this._keys(currentNode.right, queue, lo, hi);
    }
  }
  return BinarySearchTree;
})();

export default BinarySearchTree;