/*
Description

Welcome
In this kata, we'll playing with an Android game Calculator: The game.

Input
You are given five arguments:
number: An integer. The initial number.
goal: An integer. The target number.
moves: An integer. The maximum number of moves you can make.
buttons: The available buttons. It's a string array, each element represents a button.
portal: An array of 2 elements. The rule of partal please see the part: Rule of Portal.
For the Level 1(see the image above), the arguments are:
number=0, goal=2, moves=2, buttons=["+1"] (no portal)

Output
A string array. It represents the buttons you pressed in turn.
For the Level 1(see the image above), the output should be:
["+1","+1"]
Note that the buttons can be used repeatedly.

All Buttons
"+-/[n]": Such as "+1","-2","*3","/4"... Pressing the button will carry out corresponding basic mathematical operations 
on the current number. For example, if the current number is 0, when "+1" pressed, the current number became to 1(0+1=1). 
Note that the negative can be used, such as "*-3","/-2"..
"X^[n]": Such as X^2,X^3,X^4,etc.. Pressing the button will carry out the power operation for the current number. For 
example, if the current number is 2, when "X^3" pressed, the current number became to 8.
"n": A number without operator. Pressing the button will insert it to the end of the current number. For example, if the 
current number is 1, when "23" pressed, the current number became to 123.
"<<": It represents backspace, delete a digit from the end of the current number. For example, if the current number is 
123, when "<<" pressed, the current number became to 12.
"Reverse". If this button pressed, the current number will be reversed(Note that the leading zeros will be removed). 
For example, if the current number is 123, when "Reverse" pressed, the current number became to 321. Note, if the 
current number is negative, "-" should not reversed.
"[xx]=>[yy]": xx and yy represent one or more digits. If this button pressed, all the digits xx in the current number 
will be replaced with yy(from left to right). For example, if the current number is 111, when "1=>2" pressed, the 
current number became to 222. Another example, if the current number is 222, when "22=>33" pressed, the current number 
became to 332, instead of 233(the meaning of from left to right).
"SUM": If this button pressed, the current number will be changed to the sum of its digits. For example, if the current 
number is 123, when "SUM" pressed, the current number became to 6(1+2+3=6). Note, if the current number is negative, the 
sum of it should be negative too.
"Shift": Two buttons are available: "<Shift" and "Shift>". If the button pressed, the current number will be shifted to 
left or right 1 position. For example, if the current number is 123, when "<Shift" pressed, the current number became 
to 231. Note, if the current number is negative, symbol- should not shift.
"Mirror": If this button pressed, the mirror number will be append to the end of the current number. For example, if 
the current number is 123, when "Mirror" pressed, the current number became to 123321. Note, if the current number is
negative, - should not append to the end(if you do that, NaN error report is waiting for you ;-)).
"[+][n]": Increase the value of all buttons(except for itself) by n. For example, we have three buttons: "+1","-2", and 
"[+]1", if "[+]1" pressed, three buttons became to "+2","-3", and "[+]1".
"Inv10": Inverse each digit of the current number. For a digit x(except 0), after "Inv10" pressed, it will be changed 
to 10-x. For example, if the current number is 123, when "Inv10" pressed, the current number became to 987.
"Copy" and "Paste": "Copy" button can copy the current number to the memory; "Paste" button can paste the copied number 
to the end of the current number. Note, "Copy" doesn't cost a move, but "Paste" does. And, you can not using "Paste" 
button before you used "Copy" button copy a number to the memory.

Rule of Portal
Argument portal is an array of two elements, like [l,r](l>r), where l is the left position of portal, and r is the right 
position of portal. The position is count from the right to the left(1-based). For example, a number 789, 9 at the 
position 1, 8 at the position 2, and 7 at the position 3. If the portal's left position at 3, and right position at 1, 
we use an array [3,1] to represent the portal.
The rule of portal is: Any digit at position l, will be transmitted to position r, and plus it with the current 
digit(carry if needed).

See an example:
As you can see, the left position of portal is 4, and the right position of portal is 1. So, portal=[4,1]. And, we have 
buttons: "+8","*4","9","Inv10","7=>0".
If button "9" pressed, the current number 189 will be changed to:
   v
1899
^
digit 1 at the left position of portal, so it will be 
added to the right position of portal:
   v
 900    ---> 899+1=900
^
Another example:
number=9,goal=64,moves=2,buttons=["4","6"],portal=[3,2]
Now, we can:
 v
 96
^
press "4":
 v
964
^
digit 9 at the left position of portal, so it will be 
added to the right position of portal:
 v
154  ---> 6+9=15
^
Again, digit 1 at the left position of portal, so it will be 
added to the right position of portal:
 v
 64  ---> 5+1=6
^
Which is the goal number of game level.
If more than one digits before/at left position of portal, see this example:
number=45,goal=516,moves=4,buttons=["+10","Mirror"],portal=[4,2]
Let's press "Mirror" button twice and see what's happening: (Sorry, I can't upload images atm)
  v
  45
^
Press "Mirror":
  v
4554
^
4 add to 5:
  v
 594  --->5+4=9
^
Press "Mirror" again:
    v
594495
  ^
4 add to 9 and carry:
    v
 59535
  ^
9 add to 3 and carry:
    v
  5625
  ^
5 add to 2:
    v
   675
  ^

Note
The calculator can only calculate numbers less than 1E7. That is, the maximum number of computations is 6 digits. 
For example, if the current number is 12345 and you pressed "Mirror", we can not got a new number 1234554321, overflow 
error will be reported.
In the calculation process, all numbers should be integers, because calculators do not support floating point numbers. 
If you do that, will got an error report ;-)
All inputs are valid.
All testcases have at least one valid solution.
You can search this game on web, download it and play. But, I bet you can't pass the game before you write the correct 
solution for this Kata. ;-)
*/

function calculatorGame(number, goal, moves, buttons, portal) {
  var v = [[number, buttons, [], 0, NaN]],
    s = new Set();
  while (v.length) {
    let [n, bl, ml, t, m] = v.shift();
    if (t === moves) {
      continue;
    }
    let q = bl
      .map((b) => {
        var nn = n,
          nbl = [...bl],
          nml = [...ml, b],
          nt = t + 1,
          nm = m;
        if (/^[\+\-\*\/]/.test(b)) {
          nn = eval(`(${n})${b}`);
        } else if (/^X\^/.test(b)) {
          nn = eval(`(${n})**${b.slice(2)}`);
        } else if (/^\d+$/.test(b)) {
          nn = +(n + b);
        } else if (b === "<<") {
          nn = +("" + n).slice(0, -1);
        } else if (b === "Reverse") {
          nn = Math.sign(n) * [...("" + Math.abs(n))].reverse().join("");
        } else if (/^\d+=>\d+$/.test(b)) {
          var [f, g] = b.match(/^(\d+)=>(\d+)$/).slice(1);
          nn = +("" + n).replace(new RegExp(f, "g"), g);
        } else if (b === "SUM") {
          nn =
            Math.sign(n) * [...("" + Math.abs(n))].reduce((t, d) => +d + t, 0);
        } else if (b === "<Shift") {
          nn =
            Math.sign(n) *
            (("" + Math.abs(n)).slice(1) + ("" + Math.abs(n))[0]);
        } else if (b === "Shift>") {
          nn =
            Math.sign(n) *
            (("" + Math.abs(n)).slice(-1) + ("" + Math.abs(n)).slice(0, -1));
        } else if (b === "Mirror") {
          nn = +(n + [...("" + Math.abs(n))].reverse().join(""));
        } else if (/^\[\+\]\d+$/.test(b)) {
          var mv = b.match(/^\[\+\](\d+)$/)[1];
          nbl = nbl.map((nb) =>
            nb === b ? nb : nb.replace(/\d+/g, (nv) => +nv + +mv)
          );
        } else if (b === "Inv10") {
          nn = +("" + n).replace(/\d/g, (d) => (+d ? 10 - d : d));
        } else if (b === "Copy") {
          if (ml[ml.length - 1] !== "Copy") {
            (nm = "" + n), nt--;
          }
        } else if (b === "Paste") {
          if (!isNaN(m)) {
            nn = +(n + m);
          }
        } else throw new Error(`invalid button: ${b} in ${bl}`);

        if (portal) {
          var [pl, pr] = portal,
            pn = "" + Math.abs(nn);
          while (pn.length >= pl)
            pn =
              +(pn.slice(0, pn.length - pl) + pn.slice(pn.length - pl + 1)) +
              +(pn[pn.length - pl] + "0".repeat(pr - 1)) +
              "";
          nn = Math.sign(nn) * pn;
        }
        return [nn, nbl, nml, nt, nm];
      })
      .filter(
        ([nn, nbl, nml, nt, nm]) =>
          Math.abs(nn) < 1e7 && nn % 1 === 0 && !s.has([nn, nm, ...nbl].join())
      );
    var win = q.find(([nn]) => nn === goal);
    if (win) {
      return win[2];
    }
    for (let [nn, nbl, nml, nt, nm] of q) {
      s.add([nn, nm, ...nbl].join());
    }
    v.push(...q);
  }
}
