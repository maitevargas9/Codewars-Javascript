/*
Description

Count how often sign changes in array.

result
number from 0 to ... . Empty array returns 0

example
const arr = [1, -3, -4, 0, 5];

| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |

catchSignChange(arr) == 2;
*/

function catchSignChange(arr) {
  let count = 0;
  let a = arr.map((x, y, arr) =>
    (x >= 0 && arr[y + 1] < 0) || (x < 0 && arr[y + 1] >= 0) ? count++ : count
  );
  return count;
}
