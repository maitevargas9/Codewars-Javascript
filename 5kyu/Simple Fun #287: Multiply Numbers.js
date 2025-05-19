/*
Description

Task
Bob has entered the primary school and is now learning to multiply non-negative numbers. Since he has just started to 
learn, he does not know what the carry is yet. To multiply two numbers, he goes through their digits from right to 
left one by one, multiples the corresponding digits in two numbers and writes down the last digit of the result. If 
one number has less digits than another one, he appends leading zeros to it.
For example, 15 x 43 = 45 for Bob, because 5 x 3 = 15 and Bod writes down 5, and 1 x 4 = 4 so Bob writes 4.
2016 x 100 = 0, because 100 has only 3 digits and should be written as 0100.
Similarly, 382 x 31 = 42.
Bob's teacher gave him a list of pairwise distinct non-negative numbers not greater than 1000 and asked to find the 
maximal number of integers that can be chosen such that the product of each pair of the chosen integers is equal to 0.
Help Bob solve the task, but remember to calculate products the same way Bob does, so the teacher won't suspect that 
Bob cheated.

Input/Output
[input] integer array numbers
Array of pairwise distinct numbers.
1 ≤ numbers.length ≤ 20
0 ≤ numbers[i] ≤ 1000
[output] an integer
The maximum number of integers to chose.

Example
For numbers = [100, 25, 17, 52], the output should be 3.
Each pair of numbers from the group [100, 25, 52] has the product of 0 when calculated by Bob's method.
100 x 25 = 0, 100 x 52 = 0, 25 x 52 = 0
So the output is the size of group [100, 25, 52].
For numbers = [0, 45, 502, 1000], the output should be 4.
The product of all number pair in [0, 45, 502, 1000] are equal to 0.
0 x 45 = 0, 0 x 502 = 0, 0 x 1000 = 0,
45 x 502 = 0, 45 x 1000 = 0, 502 x 1000 = 0
So the output is 4.
*/

function multiplyNumbers(numbers) {
  numbers = numbers.map((elem) => elem.toString().padStart(4, "0"));
  let resultPair = [];

  for (let i = 0; i < numbers.length; i++) {
    let x = [];
    for (let j = 0; j < numbers.length; j++) {
      if (j !== i) {
        x.push(numbers[j]);
      }
    }
    resultPair.push([numbers[i], x]);
  }

  let res = [];
  resultPair.map((elem) => {
    elem[0] = elem[0].split("");
    let x = [];
    elem[1].map((n) => {
      let resultMult = 0;
      n = n.split("");
      for (let i = 0; i < elem[0].length; i++) {
        let mult = (elem[0][i] * n[i]).toString();
        resultMult += mult[mult.length - 1] * 1;
      }
      if (resultMult == 0) {
        x.push(n.join(""));
      }
    });
    res.push([elem[0].join(""), x]);
  });

  res.sort((a, b) => b[1].length - a[1].length);

  let result = [res[0]];
  for (let i = 1; i < res.length; i++) {
    let main = res[i][0];
    let includes = result.every((pair) => pair[1].includes(main));
    if (includes) {
      result.push(res[i]);
    }
  }

  return result.length == 1 ? 0 : result.length;
}
