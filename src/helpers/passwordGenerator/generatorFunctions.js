// Import necessary functions
import { randomInt, randomFloat } from "../random";
import { randomize, listToString, shuffleList, shuffleString } from "./utils";
import {
  LOWER_CASE_CHARACTERS,
  UPPER_CASE_CHARACTERS,
  DIGITS,
  SPECIAL_CHARACTERS,
  ALL_CHARACTERS,
  LETTER_MAPS,
} from "./constants";

// Function to generate a random password with random length
function generateRandom() {
  const length = randomInt(8, 30);
  // Generate random characters and convert to string
  return listToString(randomize(ALL_CHARACTERS, length));
}

// Function to generate a random password with specified length
function generateRandomWithLength(length) {
  // Generate random characters and convert to string
  return listToString(randomize(ALL_CHARACTERS, length));
}

// Function to generate a random password with custom character types
function generateRandomWithArguments(
  length,
  isUpper,
  isLower,
  isDigit,
  isSymbol
) {
  // Build list of selected characters
  let selectedCharacters = "";
  if (isUpper) selectedCharacters += UPPER_CASE_CHARACTERS;
  if (isLower) selectedCharacters += LOWER_CASE_CHARACTERS;
  if (isSymbol) selectedCharacters += SPECIAL_CHARACTERS;
  if (isDigit) selectedCharacters += DIGITS;
  // Generate random characters from selected set and convert to string
  return listToString(randomize(selectedCharacters, length));
}

// Function to generate a random password with a minimum of one character from each type
function generateRandomWithMinimum(length) {
  // Ensure at least one character of each type
  let selectedCharacters = "";
  selectedCharacters += listToString(randomize(UPPER_CASE_CHARACTERS, 1));
  length -= 1;
  selectedCharacters += listToString(randomize(LOWER_CASE_CHARACTERS, 1));
  length -= 1;
  selectedCharacters += listToString(randomize(SPECIAL_CHARACTERS, 1));
  length -= 1;
  selectedCharacters += listToString(randomize(DIGITS, 1));
  length -= 1;

  // Add additional random characters from all types
  selectedCharacters += listToString(randomize(ALL_CHARACTERS, length));

  // Shuffle characters and return as string
  return shuffleString(selectedCharacters);
}

// Function to generate a random password with custom number of characters
function generateRandomWithCustom(upper, lower, digit, symbol) {
  let selectedCharacters = "";
  if (upper > 0)
    selectedCharacters += listToString(randomize(UPPER_CASE_CHARACTERS, upper));
  if (lower > 0)
    selectedCharacters += listToString(randomize(LOWER_CASE_CHARACTERS, lower));
  if (digit > 0) selectedCharacters += listToString(randomize(DIGITS, digit));
  if (symbol > 0)
    selectedCharacters += listToString(randomize(SPECIAL_CHARACTERS, symbol));
  return shuffleString(selectedCharacters);
}

// Function to generate a "perfect" password with guaranteed character types and minimum length
function generateRandomPerfect() {
  // Ensure at least two characters of each type
  let selectedCharacters = "";
  selectedCharacters += listToString(randomize(UPPER_CASE_CHARACTERS, 2));
  selectedCharacters += listToString(randomize(LOWER_CASE_CHARACTERS, 2));
  selectedCharacters += listToString(randomize(SPECIAL_CHARACTERS, 2));
  selectedCharacters += listToString(randomize(DIGITS, 2));

  // Add random characters from all types to fill remaining length
  const remainingLength = 10 - selectedCharacters.length;
  selectedCharacters += listToString(
    randomize(ALL_CHARACTERS, remainingLength)
  );

  // Shuffle characters and return as string
  return shuffleString(selectedCharacters);
}

// Function to generate a random password from a string
function generateFromString(string, isPerfect) {
  // Generate random characters based on LETTER_MAPS for each letter in the string
  let password = [];
  for (const letter of string) {
    password.push(
      listToString(randomize(LETTER_MAPS[letter.toUpperCase()], 1))
    );
  }
  // Ensure perfect password contains all character types if required
  if (isPerfect) {
    const perfect = [];
    perfect.push(listToString(randomize(UPPER_CASE_CHARACTERS, 1)));
    perfect.push(listToString(randomize(LOWER_CASE_CHARACTERS, 1)));
    perfect.push(listToString(randomize(SPECIAL_CHARACTERS, 1)));
    perfect.push(listToString(randomize(DIGITS, 1)));
    shuffleList(perfect);
    password.push(listToString(perfect));
  }
  // Combine and shuffle characters and return as string
  return listToString(password);
}

// Export functions for use
export {
  generateRandom,
  generateRandomWithLength,
  generateRandomWithArguments,
  generateRandomWithCustom,
  generateRandomWithMinimum,
  generateRandomPerfect,
  generateFromString,
};
