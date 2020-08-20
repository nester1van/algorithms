// алфавит

export default function Alphabet(R) {
  this.alphabet = [];
  this.inverse = [];
  this.R = R;
  for (let i = 0; i < R; i++) {
    this.alphabet[i] = String.fromCharCode(i);
    this.inverse[i] = i;
  }
}
Alphabet.ASCII = new Alphabet(128);
Alphabet.EXTENDEN_ASCII = new Alphabet(256);
Alphabet.UNICODE16 = new Alphabet(65536);

Alphabet.prototype.contains = function(char) {
  return this.inverse[char.charCodeAt(0)] != undefined;
}
Alphabet.prototype.lgR = function() {
  let lgR = 0;
  for (let t = this.R - 1; t >= 1; t = Math.floor(t / 2)) {
    lgR++;
  }
  return lgR;
}
Alphabet.prototype.toIndex = function(char) {
  let index = char.charCodeAt(0); 
  if (index < 0 || index > this.R) {
    throw new Error(char + " is not at alphabet");
  }
  return index;
}
Alphabet.prototype.toIndices = function(string) {
  let target = [];
  for (let i = 0; i < string.length; i++) {
    target[i] = this.toIndex(string[i]);
  }
  return target;
}
Alphabet.prototype.toChar = function(index) {
  if (index < 0 || index >= this.R) {
    throw new Error("Alphabet index is out of bounds");
  }
  return char = String.fromCharCode(index);
}