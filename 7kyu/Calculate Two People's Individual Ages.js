/*
Description

Create a function that takes in the sum and age difference of two people, calculates their individual ages, 
and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:
sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/

function getAges(sum, difference) {
  if (sum < 0 || difference < 0) {
    return null;
  }

  const older = (sum + difference) / 2;
  const younger = (sum - difference) / 2;

  return older < 0 || younger < 0 ? null : [older, younger];
}
