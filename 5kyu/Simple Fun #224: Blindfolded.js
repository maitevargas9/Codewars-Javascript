/*
Description

Task
Your are blindfolded and left in a big square room of length size. Because you can't see anything, you tread 
carefully along the side of the room, forming a spiral shape as you walk. Now that you know how many steps you 
have taken, you want to know your position in the room.

Input/Output
[input] integer size
The size of the room.
[input] integer steps
The number of steps you have taken(1-based).
[output] an integer array
Array/Tuple (depending on language) of length two, describing your position in the room(0-based).

Example
For size = 5 and steps = 20, the output should be [2, 3].
Your path can be shown as the following figure:
[ 1,  2,  3,  4,  5], 
[16, 17, 18, 19,  6], 
[15,  x,  x, 20,  7], 
[14,  x,  x,  x,  8], 
[13, 12, 11, 10,  9]
The 20th step brought you to the second line and third column (0-based), so the answer is [2, 3].
*/

function blindfolded(size, steps) {
  if (steps <= size) {
    return [0, steps - 1];
  } else if (steps < size + size) {
    return [steps - size, size - 1];
  } else {
    const [y, x] = blindfolded(size - 1, steps - size - size + 1);
    return [size - 1 - y, size - 2 - x];
  }
}
