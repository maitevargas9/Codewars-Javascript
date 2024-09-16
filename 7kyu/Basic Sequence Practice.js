/*
Description

Your Task

Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained 
above. Whenn < 0 return the sequence with negative terms.

Examples
5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
7  -->  [0,  1,  3,  6,  10,  15,  21,  28]
*/

function sumOfN(n) {
  return Array.from(
    Array(Math.abs(n) + 1),
    (elem, i) => (((i + 1) * i) / 2) * Math.sign(n)
  );
}
