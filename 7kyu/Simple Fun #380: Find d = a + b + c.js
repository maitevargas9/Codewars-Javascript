/*
Description

Task
You are given a sorted integer array arr. It contains several uniq integers(negative, positive, or zero).
Your task is to find the largest d such that a + b + c = d, where a, b, c, and d are distinct elements of arr. 
If no such an element d found, return null.

Example
For arr = [2,3,5,7,12], the output should be 12.
12 = 2 + 3 + 7
For arr = [2,16,64,256,1024], the output should be null.
No such an element d found.
For arr = [-100,-1,0,7,101], the output should be 0.
0 = -100 + -1 + 101

Note
3 < arr.length <= 50
-1000 <= arr[i] <= 1000
*/

function findD(arr) {
  const n = arr.length;

  for (let d = n - 1; d >= 0; d--) {
    for (let a = 0; a < n; a++) {
      if (a === d) {
        continue;
      }
      for (let b = a + 1; b < n; b++) {
        if (b === d) {
          continue;
        }
        for (let c = b + 1; c < n; c++) {
          if (c === d) {
            continue;
          }
          if (arr[a] + arr[b] + arr[c] === arr[d]) {
            return arr[d];
          }
        }
      }
    }
  }

  return null;
}
