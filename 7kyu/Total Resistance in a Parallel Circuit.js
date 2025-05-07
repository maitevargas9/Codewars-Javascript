/*
Description

Create a function that gives total resistance Rt(to 2 decimal places) in a parallel 
circuit when given all the individual resistances in the circuit R1, R2, R3....
*/

function calculateTotalResistance(...resistances) {
  if (resistances.length === 0) {
    return 0;
  }

  const reciprocalSum = resistances.reduce((sum, r) => sum + 1 / r, 0);
  const total = 1 / reciprocalSum;

  return parseFloat(total.toFixed(2));
}
