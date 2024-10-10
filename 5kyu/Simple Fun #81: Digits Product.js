/*
Description

Task
Given an integer product, find the smallest positive integer the product of whose digits is equal to product. 
If there is no such integer, return -1 instead.

Example
For product = 1, the output should be 11;
1 x 1 = 1 (1 is not a valid result, because it has only 1 digit)
For product = 12, the output should be 26;
2 x 6 = 12
For product = 19, the output should be -1.
No valid result found.
For product = 450, the output should be 2559.
2 x 5 x 5 x 9 = 450
For product = 581, the output should be -1.
No valid result found.
Someone says the output should be 783, because 7 x 83 = 581.
Please note: 83 is not a DIGIT.

Input/Output
[input] integer product
Constraints: 0 ≤ product ≤ 600.
[output] a positive integer
*/

function digitsProduct(product) {
  let result = "";
  if (product < 10) {
    return 10 + product;
  }
  for (let i = 9; i > 1; i--) {
    while (product % i == 0) {
      result += "" + i;
      product /= i;
    }
  }
  return product != 1 ? -1 : +result.split("").reverse().join("");
}
