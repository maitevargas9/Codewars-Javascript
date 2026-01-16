/*
Description

Given a logarithm base X and two values A and B, return a sum of logratihms with the base X: 
logXA+logX​B.
*/

function logs(x, a, b) {
  return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);
}
