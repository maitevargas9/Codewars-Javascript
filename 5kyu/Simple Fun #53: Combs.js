/*
Description

Task

Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of 
different length, in which she carries the combs. The only way they fit is horizontally and without overlapping. Given 
teeth' positions on both combs, find the minimum length of the purse she needs to take them with her.

It is guaranteed that there is at least one tooth at each end of the comb.

Note, that the combs can not be rotated/reversed.

Example
For comb1 = "*..*" and comb2 = "*.*", the output should be 5
Although it is possible to place the combs like on the first picture, the best way to do this is either picture 2 or picture 3.

Input/Output
[input] string comb1
A comb is represented as a string. If there is an asterisk ('*') in the ith position, there is a tooth there. Otherwise there 
is a dot ('.'), which means there is a missing tooth on the comb.
Constraints: 1 ≤ comb1.length ≤ 10.
[input] string comb2
The second comb is represented in the same way as the first one.
Constraints: 1 ≤ comb2.length ≤ 10.
[output] an integer
The minimum length of a purse Miss X needs.
*/

function combs(comb1, comb2) {
  const match = (offset) =>
    [...comb1].every((val, idx) => val !== "*" || comb2[idx - offset] !== "*");

  let result = Infinity;
  for (let l1 = comb1.length, l2 = comb2.length, i = -l2 + 1; i <= l1; i++) {
    match(i) &&
      (result = Math.min(result, Math.max(l1 - i * (i < 0), l2 + i * (i > 0))));
  }

  return result;
}
