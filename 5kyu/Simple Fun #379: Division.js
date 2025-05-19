/*
Description

Task
You are given three positive integers t, a, b. Your task is to establish whether (t^a - 1)/(t^b -1) is an integer 
with less than 100 digits.
Return the result of (t^a - 1)/(t^b -1) in string format, if the result is an integer with less than 100 digits. 
Otherwise, return "Not an integer with less than 100 digits".

Example
For t = 2, a = 9, b = 3, the output should be "73". Because:
(2^9-1)/(2^3-1) = 511/7 = 73
For t = 2, a = 3, b = 2, the output should be "Not an integer with less than 100 digits". Because:
(2^3-1)/(2^2-1) = 7/3 = 2.33333333...
For t = 123, a = 911, b = 1, the output should be "Not an integer with less than 100 digits". Because the result of 
(123^911 - 1)/(123^1 -1) is more than 100 digits.

Note
1 < t <= 100
1 < a <= 10000
1 < b <= 100
*/

function division(t, a, b) {
  let numerator = BigInt(t) ** BigInt(a) - 1n;
  let denominator = BigInt(t) ** BigInt(b) - 1n;
  let result = (numerator / denominator).toString();

  return numerator % denominator !== 0n || result.length > 100
    ? "Not an integer with less than 100 digits"
    : result;
}
