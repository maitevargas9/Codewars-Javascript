/*
Description

Task
Alice is five years old and she is a pupil of a kindergarten. Alice loves number 1 very much and she tries to 
express all non-negative integer (those are the only ones she knows so far) as the summation or subtraction of 
some integers that contain only digit 1. In fact, there are lots of ways to do so, so Alice wants to minimize 
the number of digits 1 used.

For example, 7 = 1 + 1 + 1 + 1 + 1 + 1 + 1 requires 7 digits 1, but 7 = 11 - 1 - 1 - 1 - 1 requires just 6.

Let's help Alice to find the minimum number of digits 1 required to obtain the given number n.

Input/Output
[input] integer n
A non-negative integer.
0 <= n <= 10000
[output] an integer
The minimum number of 1s required to obtain n.

Example
For n = 121, the output should be 6.
121 can be expressed as 121 = 111 + 11 - 1, and this is the optimal way to do it.
For n = 11, the output should be 2.
11 is already a number contains only digits 1.
For n = 1000, the output should be 7.
1000 can be expressed as 1000 = 1111 - 111.
*/

function digitOne(n) {
  if (n < 7) {
    return n || 2;
  }

  var x = (n + "").length;

  if (/^1+$/.test(n)) {
    return x;
  }

  var y = +"1".repeat(x);
  var z = +"1".repeat(x + 1);

  if (y > n) {
    return digitOne(y - n) + x;
  } else {
    var a = n % y;
    var b = (z - n) % y;
    var c = ~~(n / y) * x + (a ? digitOne(a) : 0);
    var d = ~~((z - n) / y) * x + x + 1 + (b ? digitOne(b) : 0);
    return Math.min(c, d);
  }
}
