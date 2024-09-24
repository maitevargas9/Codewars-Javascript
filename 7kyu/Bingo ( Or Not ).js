/*
Description

For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the 
array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the 
game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. 
Your outputs should be "WIN" or "LOSE" respectively.
*/

function bingo(a) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let bingo = "BINGO";
  a.forEach((num) => {
    let letter = alphabet[num - 1];
    let index = bingo.indexOf(letter);
    if (index !== -1) {
      bingo = bingo.slice(0, index) + bingo.slice(index + 1);
    }
  });
  return bingo.length > 0 ? "LOSE" : "WIN";
}
