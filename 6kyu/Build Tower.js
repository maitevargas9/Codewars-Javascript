/*
Description

Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. 
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
  let tower = [];

  for (let i = 1; i <= nFloors; i++) {
    let numStars = 2 * i - 1;
    let numSpaces = nFloors - i;
    let floor =
      " ".repeat(numSpaces) + "*".repeat(numStars) + " ".repeat(numSpaces);
    tower.push(floor);
  }

  return tower;
}
