// красно-черное дерево бинарного поиска

import BinarySearchTree from '../binarySearchTree/binarySearchTree';

const RedBlackBST = (function(){
  const RED = true;
  const BLACK = false;
  class Node {
    constructor(key, value, n, color) {
      this.key = key;
      this.value = value;
      this.n = n;
      this.color = color;
      this.left = null;
      this.right = null;
    }
  }
  class RedBlackBST extends BinarySearchTree{
    constructor() {
      super();
    }
    isRed(currentNode) {
      if (currentNode == null) return false;
      return currentNode.color == RED;
    }
    rotateLeft(currentNode) {
      let newCurrentNode = currentNode.right;
      currentNode.right = newCurrentNode.left;
      newCurrentNode.left = currentNode;
      newCurrentNode.color = currentNode.color;
      currentNode.color = RED;
      newCurrentNode.n = currentNode.n;
      currentNode.n = this._size(currentNode.left) + this._size(currentNode.right) + 1;
      return newCurrentNode;
    }
    rotateRight(currentNode) {
      let newCurrentNode = currentNode.left;
      currentNode.left = newCurrentNode.right;
      newCurrentNode.right = currentNode;
      newCurrentNode.color = currentNode.color;
      currentNode.color = RED;
      newCurrentNode.n = currentNode.n;
      currentNode.n = this._size(currentNode.left) + this._size(currentNode.right) + 1;
      return newCurrentNode;
    }
    flipColors(currentNode) {
      currentNode.color = RED;
      currentNode.left.color = BLACK;
      currentNode.right.color = BLACK;
    }
    put(key, value) {
      this.root = this._put(this.root, key, value);
      this.root.color = BLACK;
    }
    _put(currentNode, key, value) {
      if (currentNode == null) return new Node(key, value, 1, RED);
      if (key < currentNode.key) currentNode.left = this._put(currentNode.left, key, value);
      else if (key > currentNode.key) currentNode.right = this._put(currentNode.right, key, value);
      else currentNode.value = value;
      if (this.isRed(currentNode.right) && !this.isRed(currentNode.left)) currentNode = this.rotateLeft(currentNode);
      if (this.isRed(currentNode.left) && this.isRed(currentNode.left.left)) currentNode = this.rotateRight(currentNode);
      if (this.isRed(currentNode.left) && this.isRed(currentNode.right)) this.flipColors(currentNode);
      currentNode.n = this._size(currentNode.left) + this._size(currentNode.right) + 1;
      return currentNode;
    }
  }
  return RedBlackBST;
})();

export default RedBlackBST;