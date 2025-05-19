/*
Description

#Task There are several points on the wall, each has x and y coordinates. Two points can be connected either with 
vertical or with horizontal lines. Count the number of rectangles that can be obtained by connecting 4 points.

#Input/Output
[input] 2D integer array points
Array of unique elements. Each element is a 2-element array, containing x and y coordinates of a point.
4 ≤ points.length ≤ 50
[output] an integer
The number of rectangles.

#Example
For points = [[1,0],[0,0],[0,1],[1,1]], the output should be 1.
There are exactly 4 points, and they form a rectangle.
For points = [[0,0],[1,0],[10,0],[1,17],[10,17],[0,17]], the output should be 3.
It's possible to obtain 3 rectangles: [[0, 0], [1, 0], [1, 17], [0, 17]]; [[0, 0], [10, 0], [10, 17], [0, 17]]; 
[[1, 0], [10, 0], [10, 17], [1, 17]]
*/

function countRectangles(points) {
  const pointSet = new Set(points.map((p) => `${p[0]},${p[1]}`));
  let count = 0;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      if (x1 !== x2 && y1 !== y2) {
        if (pointSet.has(`${x1},${y2}`) && pointSet.has(`${x2},${y1}`)) {
          count++;
        }
      }
    }
  }

  return count / 2;
}
