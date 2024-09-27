/*
Description

Task

Given a string s, find out if its characters can be rearranged to form a palindrome.

Example
For s = "aabb", the output should be true.
We can rearrange "aabb" to make "abba", which is a palindrome.

Input/Output
[input] string s
A string consisting of lowercase English letters.
Constraints:
4 ≤ inputString.length ≤ 50.
[output] a boolean value
true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.
*/

function palindromeRearranging(s) {
  let object = {};
  [...s].map((x) => (object[x] = object[x] ? object[x] + 1 : 1), {});
  return Object.values(object).filter((x) => x % 2 !== 0).length < 2;
}
