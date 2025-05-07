/*
Description

Task
Given some sticks by an array V of positive integers, where V[i] represents the length of the sticks, 
find the number of ways we can choose three of them to form a triangle.

Example
For V = [2, 3, 7, 4], the result should be 1.
There is only (2, 3, 4) can form a triangle.
For V = [5, 6, 7, 8], the result should be 4.
(5, 6, 7), (5, 6, 8), (5, 7, 8), (6, 7, 8)

Input/Output
[input] integer array V
stick lengths
3 <= V.length <= 100
0 < V[i] <=100
[output] an integer
number of ways we can choose 3 sticks to form a triangle.
*/

function countingTriangles(V) {
  V.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < V.length - 2; i++)
    for (let j = i + 1, k = j + 1; j < V.length - 1; j++) {
      while (k < V.length && V[i] + V[j] > V[k]) {
        k++;
      }
      count += k - j - 1;
    }
  return count;
}
