/*
Description

Wilson primes satisfy the following condition. Let P represent a prime number.

Then, (P−1)!+1/P∗P should give a whole number, where P! is the factorial of P.

Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.
*/

function amIWilson(p) {
  let P = BigInt(p);
  let mod = P * P;
  let fact = 1n;
  for (let i = 2n; i < P; i++) {
    fact = (fact * i) % mod;
  }
  return (fact + 1n) % mod === 0n;
}
