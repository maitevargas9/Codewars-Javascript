/*
Description

This is the first of my "-nacci" series. If you like this kata, check out the zozonacci sequence too.

Task
Mix -nacci sequences using a given pattern p.
Return the first n elements of the mixed sequence.

Rules
The pattern p is given as a list of strings (or array of symbols in Ruby) using the pattern mapping below 
(e. g. ['fib', 'pad', 'pel'] means take the next fibonacci, then the next padovan, then the next pell number and so on).
When n is 0 or p is empty return an empty list.
If n is more than the length of p repeat the pattern.

Examples

            0  1  2  3  4  
----------+------------------
fibonacci:| 0, 1, 1, 2, 3 ...
padovan:  | 1, 0, 0, 1, 0 ...
pell:     | 0, 1, 2, 5, 12 ...

pattern = ['fib', 'pad', 'pel']
n = 6
#          ['fib',        'pad',      'pel',   'fib',        'pad',      'pel']
# result = [fibonacci(0), padovan(0), pell(0), fibonacci(1), padovan(1), pell(1)]
result = [0, 1, 0, 1, 0, 1]

pattern = ['fib', 'fib', 'pel']
n = 6
#          ['fib', 'fib', 'pel', 'fib', 'fib', 'pel']
# result = [fibonacci(0), fibonacci(1), pell(0), fibonacci(2), fibonacci(3), pell(1)]
result = [0, 1, 0, 1, 2, 1]

Sequences
fibonacci : 0, 1, 1, 2, 3 ...
padovan: 1, 0, 0, 1, 0 ...
jacobsthal: 0, 1, 1, 3, 5 ...
pell: 0, 1, 2, 5, 12 ...
tribonacci: 0, 0, 1, 1, 2 ...
tetranacci: 0, 0, 0, 1, 1 ...

Pattern mapping
'fib' -> fibonacci
'pad' -> padovan
'jac' -> jacobstahl
'pel' -> pell
'tri' -> tribonacci
'tet' -> tetranacci
If you like this kata, check out the zozonacci sequence.
*/

function mixbonacci(pattern, length) {
  const gen = (fn, a) => () => (a.push(fn(a)), a.shift());

  const fns = {
    fib: gen(([a, b]) => a + b, [0, 1]),
    pad: gen(([a, b]) => a + b, [1, 0, 0]),
    jac: gen(([a, b]) => 2 * a + b, [0, 1]),
    pel: gen(([a, b]) => a + 2 * b, [0, 1]),
    tri: gen(([a, b, c]) => a + b + c, [0, 0, 1]),
    tet: gen(([a, b, c, d]) => a + b + c + d, [0, 0, 0, 1])
  };

  return pattern.length
    ? Array.from({ length }, (_, i) => fns[pattern[i % pattern.length]]())
    : [];
}
