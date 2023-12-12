// Constants
const LOWER_CASE_CHARACTERS = Array.from("abcdefghijklmnopqrstuvwxyz");
const UPPER_CASE_CHARACTERS = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const DIGITS = Array.from("0123456789");
const SPECIAL_CHARACTERS = Array.from("!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~");

const ALL_CHARACTERS = [
  ...LOWER_CASE_CHARACTERS,
  ...UPPER_CASE_CHARACTERS,
  ...DIGITS,
  ...SPECIAL_CHARACTERS,
];

// Mappings for letter encodings
const LETTER_MAPS = {
  A: ["A", "a", "1", "2", "@", "!"],
  B: ["B", "b", "2", "?"],
  C: ["C", "c", "3", "2", "(", ")"],
  D: ["D", "d", "4", "3", "|)"],
  E: ["E", "e", "5", "3", "[", "|-"],
  F: ["F", "f", "6", "3", "=", "|="],
  G: ["G", "g", "7", "4", "+"],
  H: ["H", "h", "8", "4", "#", "|-|"],
  I: ["I", "i", "9", "4", "!", "|."],
  J: ["J", "j", "10", "5", "%"],
  K: ["K", "k", "11", "5", "<", ">"],
  L: ["L", "l", "12", "5", "|_"],
  M: ["M", "m", "13", "6", "|^|", "|\\/|"],
  N: ["N", "n", "14", "6", "|\\|", "|/|"],
  O: ["O", "o", "15", "6", "0"],
  P: ["P", "p", "16", "7", ":", '"'],
  Q: ["Q", "q", "17", "7", ",0"],
  R: ["R", "r", "18", "7", "|\\"],
  S: ["S", "s", "19", "7", "&", "$"],
  T: ["T", "t", "20", "8", "_|_", "+"],
  U: ["U", "u", "21", "8", "|_|"],
  V: ["V", "v", "22", "8", "\\/"],
  W: ["W", "w", "23", "9", "\\^/"],
  X: ["X", "x", "24", "9", "/\\"],
  Y: ["Y", "y", "25", "9", ";", ":"],
  Z: ["Z", "z", "26", "9", "-/_"],
};

export {
  LOWER_CASE_CHARACTERS,
  UPPER_CASE_CHARACTERS,
  DIGITS,
  SPECIAL_CHARACTERS,
  ALL_CHARACTERS,
  LETTER_MAPS,
};
