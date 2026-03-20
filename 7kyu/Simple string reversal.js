/*
Description

In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:
"our code" => "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"
"your code rocks" => "skco redo cruoy". 
"codewars" => "srawedoc"

More examples in the test cases. All input will be lower case letters and in some cases spaces.
*/

function solve(str) {
  const letters = str.replace(/ /g, "").split("").reverse();

  return str
    .split("")
    .map((ch) => (ch === " " ? " " : letters.shift()))
    .join("");
}
