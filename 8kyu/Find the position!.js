/*
Description

When provided with a letter, return its position in the alphabet.

Input :: "a"
Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested
*/

function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const index = alphabet.indexOf(letter);
  return index !== -1 ? `Position of alphabet: ${index + 1}` : "Invalid input";
}
