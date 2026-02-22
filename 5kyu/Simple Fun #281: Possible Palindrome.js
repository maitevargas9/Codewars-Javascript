/*
Description

Task
A Palindrome is a string which reads the same backward or forward. Find the length of the longest 
palindrome you can get from the given string s by removing some (possibly zero) characters.
Let's define the shortest palindrome string is the single character(length 1).

Input/Output
[input] string s
A string consisting of lowercase and uppercase English letters, digits and symbols.
3 ≤ s.length ≤ 100
[output] an integer
A positive integer, the longest palindrome that can be obtained.

Example
For s = "foundpalindrome", the output should be 5.
One of the possible palindromes that can be constructed is "onino". There are other palindromes of length 5, but none of greater length.
For s = "abc", the output should be 1.
There is no palindrome that length greater than 1.
*/

function possiblePalindrome(s) {
  const n = s.length;

  const dp = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
  }

  for (let length = 2; length <= n; length++) {
    for (let i = 0; i <= n - length; i++) {
      let j = i + length - 1;
      if (s[i] === s[j]) {
        dp[i][j] = length === 2 ? 2 : dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][n - 1];
}
