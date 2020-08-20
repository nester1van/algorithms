// сжатие Хаффмана

import MinPQ from '../../../abstractDataTypes/minPQ/minPQ';

const Huffman = (function() {
  class Node {
    constructor(ch, freq, left, right) {
      this.ch = ch;
      this.freq = freq;
      this.left = left;
      this.right = right;
    }
    isLeaf() {
      return this.left == null && this.right == null;
    }
    static fnComparision(node1, node2) {
      if (node1.freq < node2.freq) return -1;
      if (node1.freq > node2.freq) return 1;
      return 0;
    }
  };
  class Huffman {
    constructor(str) {
      this.R = 256;
      this.str = str;
      this.arrFreq = [];
      for (let i = 0; i < this.R; i++) {
        this.arrFreq[i] = 0;
      }
      this.bitTrie = "";
      this.bitStr = "";
      this.i = 0;
    }
    compress() {
      for (let i = 0; i < this.str.length; i++) {
        this.arrFreq[this.str.charCodeAt(i)]++;
      }
      let root = this.buildTrie();
      let arrStr = [];
      this.buildCode(arrStr, root, "");
      this.writeTrie(root);
      this.bitTrieLength = this.dec2bin(this.bitTrie.length);
      for (let i = 0; i <this.str.length; i++) {
        this.bitStr += arrStr[this.str[i].charCodeAt(0)];
      }
      return this.bitTrieLength + this.bitTrie + this.bitStr;
    }
    buildTrie() {
      let minPQ = new MinPQ(Node.fnComparision);
      for (let c = 0; c < this.R; c++) {
        if (this.arrFreq[c] > 0) {
          minPQ.insert(new Node(c, this.arrFreq[c], null, null));
        }
      }
      while (minPQ.size() > 1) {
        let x = minPQ.delMin();
        let y = minPQ.delMin();
        let parent = new Node("\0", x.freq + y.freq, x, y);
        minPQ.insert(parent);
      }
      return minPQ.delMin();
    }
    buildCode(arrStr, node, str) {
      if (node.isLeaf()) {
        arrStr[node.ch] = str;
        return;
      }
      this.buildCode(arrStr, node.left, str + "0");
      this.buildCode(arrStr, node.right, str + "1");
    }
    writeTrie(node) {
      if (node.isLeaf()) {
        this.bitTrie += "1";
        this.bitTrie += this.dec2bin(node.ch);
        return;
      }
      this.bitTrie += "0";
      this.writeTrie(node.left);
      this.writeTrie(node.right);
    }
  
    expand() {
      let root = this.readTrie();
      this.i = 0;
      let str = "";
      for (let i = 0; i < this.bitStr.length; ) {
        let x = root;
        while (!x.isLeaf()) {
          if (this.bitStr[i++] == 1) {
            x = x.right;
          }
          else {
            x = x.left;
          }
        }
        str += String.fromCharCode(x.ch);
      }
      return str;
    }
    readTrie() {
      if (this.i >= this.bitTrie.length) { 
        return null;
      }
      if (this.bitTrie[this.i] == 1) {
        this.i++;
        let bin = "";
        for (let j = 0; j < 8; j++) {
          bin += this.bitTrie[this.i++];
        }
        let char = this.bin2dec(bin);
        return new Node(char, 0, null, null);
      }
      else {
        this.i++
        return new Node("\0", 0, this.readTrie(), this.readTrie()); 
      }
    }
    dec2bin(dec) {
      let bin = (dec >>> 0).toString(2);
      let length = bin.length;
      for (let i = 1; i <= 8 - length; i++) {
        bin = "0" + bin;
      }
      return bin;
    }
    bin2dec(bin) {
      return parseInt(bin, 2).toString(10);
    }
    bin2char(bin) {
      return String.fromCharCode(this.bin2dec(bin));
    }
  };
  return Huffman;
})();

export default Huffman;

