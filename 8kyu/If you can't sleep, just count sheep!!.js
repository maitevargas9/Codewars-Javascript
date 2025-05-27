/*
Description

If you can't sleep, just count sheeps!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". 
Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num) {
  return [...Array(num).keys()].reduce(
    (res, i) => res + (i + 1) + " sheep...",
    ""
  );
};
