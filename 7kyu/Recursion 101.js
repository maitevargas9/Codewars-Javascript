/*
Description

In this Kata, you will be given two positive integers a and b and your task will be to apply the following operations:
i) If a = 0 or b = 0, return [a,b]. Otherwise, go to step (ii);
ii) If a ≥ 2*b, set a = a - 2*b, and repeat step (i). Otherwise, go to step (iii);
iii) If b ≥ 2*a, set b = b - 2*a, and repeat step (i). Otherwise, return [a,b].
a and b will both be lower than 10E8.
*/

function solve(a, b) {
  while (a !== 0 && b !== 0) {
    if (a >= 2 * b) {
      a %= 2 * b;
    } else if (b >= 2 * a) {
      b %= 2 * a;
    } else {
      break;
    }
  }
  return [a, b];
}
