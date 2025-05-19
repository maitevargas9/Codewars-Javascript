/*
Description

Task
You are given a dictionary-like object (implementation may vary by language) containing languages as keys and your 
corresponding test results as values. Return the list of languages where your score is at least 60, in descending 
order of the scores.

Note: the scores will always be unique (so no duplicate values)

Examples
Input object with key-value pairs:
"Java" -> 10, "Ruby" -> 80, "Python" -> 65
Ouput:
[ "Ruby", "Python" ]
Input object with key-value pairs:
"Hindi" -> 60, "Greek" -> 71, "Dutch" -> 93
Output:
[ "Dutch", "Greek", "Hindi" ]
Input object with key-value pairs:
"C++" -> 50, "ASM" -> 10, "Haskell" -> 20
Output:
[ ]
*/

function myLanguages(results) {
  return Object.entries(results)
    .filter(([language, score]) => score >= 60)
    .sort((a, b) => b[1] - a[1])
    .map(([language, score]) => language);
}
