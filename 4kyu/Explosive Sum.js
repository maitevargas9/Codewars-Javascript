/*
Description

How many ways can you make the sum of a number?

From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)

In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, 
is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands 
are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be 
partitioned in five distinct ways:
4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1

Examples
Basic
sum(1) // 1
sum(2) // 2  -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3
sum(10) // 42
Explosive
sum(50) // 204226
sum(80) // 15796476
sum(100) // 190569292
*/

function sum(num) {
  if (!Number.isInteger(num) || num < 0) {
    throw new Error("n must be a non-negative integer");
  }
  if (num === 0) {
    return 1;
  }

  const p = new Array(num + 1).fill(0n);
  p[0] = 1n;

  for (let m = 1; m <= num; m++) {
    let total = 0n;
    for (let k = 1; ; k++) {
      const g1 = (k * (3 * k - 1)) >> 1;
      if (g1 > m) {
        break;
      }
      const sign = k % 2 === 1 ? 1n : -1n;
      total += sign * p[m - g1];

      const g2 = (k * (3 * k + 1)) >> 1;
      if (g2 > m) {
        continue;
      }
      total += sign * p[m - g2];
    }
    p[m] = total;
  }

  const res = p[num];
  const MAX_SAFE = BigInt(Number.MAX_SAFE_INTEGER);
  if (res <= MAX_SAFE) {
    return Number(res);
  }
  return res.toString();
}
