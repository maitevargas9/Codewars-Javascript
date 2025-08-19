/*
Description

Create a function which checks a number for three different properties.
is the number prime?
is the number even?
is the number a multiple of 10?
Each should return either true or false, which should be given as an array. 
Remark: The Haskell variant uses data Property.

Examples
numberProperty(7)  // ==> [true,  false, false] 
numberProperty(10) // ==> [false, true,  true] 
The number will always be an integer, either positive or negative. Note that negative numbers cannot be primes, 
but they can be multiples of 10:
numberProperty(-7)  // ==> [false, false, false] 
numberProperty(-10) // ==> [false, true,  true] 
*/

function numberProperty(n) {
  function isPrime(x) {
    if (x <= 1) {
      return false;
    }
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }

  return [isPrime(n), n % 2 === 0, n % 10 === 0];
}
