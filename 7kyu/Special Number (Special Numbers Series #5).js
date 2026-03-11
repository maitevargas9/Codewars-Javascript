/*
Description

Definition
A number is a Special Number if its digits only consists of 0, 1, 2, 3, 4 or 5
Given a number, determine if it is a special number or not.

Notes
The number passed will be positive (N > 0)
All single-digit numbers within the interval [1:5] are considered special numbers

Examples
2 ==> return "Special!!"
Explanation: It's a single-digit number within the interval [1:5]
9 ==> return "NOT!!"
Explanation: Although, it's a single-digit number but Outside the interval [1:5]
23 ==> return "Special!!"
Explanation: All the number's digits formed from the interval [0:5] digits
39 ==> return "NOT!!"
Explanation: Although there is a digit (3) within the interval, the second digit is not (Must be ALL the number's Digits)
59 ==> return "NOT!!"
Explanation: Although there is a digit (5) within the interval, the second digit is not (Must be ALL the number's Digits)
513 ==> return "Special!!"
709 ==> return "NOT!!"
*/

function specialNumber(n) {
  return /^[0-5]+$/.test(String(n)) ? "Special!!" : "NOT!!";
}
