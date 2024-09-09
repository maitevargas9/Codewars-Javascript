/*
Description

Task
Given two numbers x and n, calculate the nth root of x, e.g. r such that r^n = x. However, your using a legacy library that
doesn't contain several useful functions, see below.

Examples
root(4, 2);   // 2
root(8, 3);   // 2
root(256, 4); // 4
root(9, 2);   // 3
*/

var root = function (x, nth) {
  return x ** (1 / nth);
};
