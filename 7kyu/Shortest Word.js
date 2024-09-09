/*
Description

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  var s = s.split(" ");
  let x = [];
  let y = 0;

  for (let i = 0; i < s.length; ++i) {
    x = s[i];
    if (y == 0 || x.length < y) {
      y = x.length;
    }
  }

  return y;
}
