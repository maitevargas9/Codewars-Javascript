/*
Description

Task
N lamps are placed in a line, some are switched on and some are off. What is the smallest number 
of lamps that need to be switched so that on and off lamps will alternate with each other?

You are given an array a of zeros and ones - 1 mean switched-on lamp and 0 means switched-off.

Your task is to find the smallest number of lamps that need to be switched.

Example
For a = [1, 0, 0, 1, 1, 1, 0], the result should be 3.
a      --> 1 0 0 1 1 1 0
switch --> 0 1     0
became --> 0 1 0 1 0 1 0

Input/Output
[input] integer array a
array of zeros and ones - initial lamp setup, 1 mean switched-on lamp and 0 means switched-off.
2 < a.length <= 1000
[output] an integer
minimum number of switches.
*/

function lamps(a) {
  let startWith0 = 0;
  let startWith1 = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== i % 2) {
      startWith0++;
    }
    if (a[i] !== (i + 1) % 2) {
      startWith1++;
    }
  }

  return Math.min(startWith0, startWith1);
}
