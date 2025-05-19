/*
Description

Create the hero move method

Create a move method for your hero to move through the level.

Adjust the hero's position by changing the position attribute. The level is a grid with the following values:
00	01	02	03	04
10	11	12	13	14
20	21	22	23	24
30	31	32	33	34
40	41	42	43	44

The dir argument will be a string
up
down
left
right

If the position is not inside the level grid the method should throw an error and not move the hero
*/

Hero.prototype.move = function (dir) {
  let row = parseInt(this.position[0]);
  let col = parseInt(this.position[1]);

  switch (dir) {
    case "up":
      row -= 1;
      break;
    case "down":
      row += 1;
      break;
    case "left":
      col -= 1;
      break;
    case "right":
      col += 1;
      break;
    default:
      throw new Error("Invalid direction.");
  }

  if (row < 0 || row > 4 || col < 0 || col > 4) {
    throw new Error("Out of bounds move.");
  }

  this.position = `${row}${col}`;
};
