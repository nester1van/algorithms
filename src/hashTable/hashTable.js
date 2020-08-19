import hashFunction from './hashFunction/hashFunction';
import LinearProbingHashST from './linearProbingHashST/linearProbingHashST';
import SeparateChainingHashST from './separateChainingHashST/separateChainingHashST';

const HashTable = {
  hashFunction,
  LinearProbingHashST,
  SeparateChainingHashST
};

export default HashTable;