/*
Description

Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary).

Example
[   // 3x3 matrix
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
]
// Should return 30: (1 + 5 + 9) + (3 + 5 + 7)
*/

function sum(matrix) {
  const n = matrix.length;
  let total = 0;

  for (let i = 0; i < n; i++) {
    total += matrix[i][i];
    total += matrix[i][n - 1 - i];
  }

  return total;
}
