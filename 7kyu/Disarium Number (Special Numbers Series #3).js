/*
Description

Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not.

Notes
Number passed is always Positive.
Return the result as String

Input >> Output Examples
disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 564 , thus output is "Not !!"
*/

function disariumNumber(n) {
  const digits = String(n);
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(Number(digits[i]), i + 1);
  }

  return sum === n ? "Disarium !!" : "Not !!";
}
