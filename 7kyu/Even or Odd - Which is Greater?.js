/*
Description

Given a string of digits confirm whether the sum of all the individual even digits are greater than the 
sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/

function evenOrOdd(str) {
  let odd = [],
    even = [];
  str.split(``).map((x) => ((x * 1) % 2 === 0 ? even.push(x) : odd.push(x)));
  odd = odd.reduce((a, b) => a + b * 1, 0);
  even = even.reduce((a, b) => a + b * 1, 0);
  return odd > even
    ? "Odd is greater than Even"
    : odd < even
    ? "Even is greater than Odd"
    : "Even and Odd are the same";
}
