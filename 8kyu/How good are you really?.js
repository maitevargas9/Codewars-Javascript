/*
Description

There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
*/

function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  let avg = 0;
  classPoints.forEach((num) => {
    sum += num;
  });
  avg = sum / classPoints.length;
  return yourPoints > avg ? true : false;
}
