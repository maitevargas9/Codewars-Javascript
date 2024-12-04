/*
Description

Please write a function that sums a list, but ignores any duplicated items in the list.

For instance, for the list [3, 4, 3, 6] the function should return 10,
and for the list [1, 10, 3, 10, 10] the function should return 4.
*/

function sumNoDuplicates(numList) {
  const countMap = new Map();

  numList.forEach((num) => {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  });

  return Array.from(countMap.entries())
    .filter(([_, count]) => count === 1)
    .reduce((sum, [num]) => sum + num, 0);
}
