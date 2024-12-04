/*
Description

This Kata is intended as a small challenge for my students

You're working for an Ad agencry, and want some quick help pitching ideas to your boss, Bob. Bob is a fan of "buzz" words, 
and whenever he wants a slogan, he's sure to make it out of some mesh of "buzz" words. You want to impress your boss by 
permutating all possible "buzz" words he wants for a given ad campaign, making his job easier.

Create a function called permute() that takes an array of strings as an argument. Each element in the array will contain a 
single "buzz" word. The function returns an array of all possible permutations of these strings, separated by a space.

permute(["super","hot","guacamole"]);
//=> [ 'super hot guacamole',
'super guacamole hot',
'hot super guacamole',
'hot guacamole super',
'guacamole super hot',
'guacamole hot super' ]

Note: There should be NO duplicate strings in the output array The input array MAY contain duplicate strings, which should 
STILL result in an output array with all unique strings
*/

function permute(words) {
  const uniqueWords = [...new Set(words)];

  const generatePermutations = (arr, current = []) => {
    if (arr.length === 0) {
      return [current.join(" ")];
    }
    return arr.flatMap((word, i) =>
      generatePermutations(
        [...arr.slice(0, i), ...arr.slice(i + 1)],
        [...current, word]
      )
    );
  };

  return generatePermutations(uniqueWords);
}
