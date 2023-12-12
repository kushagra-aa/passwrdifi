import { randomInt, randomFloat } from "../random";

// Convert a list of strings to a string without comma(,)
export const listToString = (list) => list.join("");

// Choose a random sample from a list with specified length
export const randomize = (list, length) =>
  list
    .slice()
    .sort(() => randomFloat() - 0.5)
    .slice(0, length);

// Shuffle a list of items in place
export const shuffleList = (list) => {
  for (let i = list.length - 1; i > 0; i--) {
    const j = randomInt(0, i);
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
};

// Shuffle a string in place
export const shuffleString = (string) => {
  const stringArray = string.split("");
  shuffleList(stringArray);
  return stringArray.join("");
};
