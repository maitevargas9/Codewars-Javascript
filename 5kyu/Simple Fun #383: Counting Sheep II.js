/*
Description

Once again, you are lose sleep in the middle of the night. You always help yourself to sleep by counting sheep.. Oppsss.. 
There are a lot of sheep waiting for you.. "one sheep, two sheep, three sheep, ...sheep, ...sleep, sleep, Zzz.."

Task
You are given a string matrix sheep. Each row separated by \n. It contains only characters s,h,e,e,p.
Your task is to count the numbers of character s,h,e,e,p with + shape or x shape in any order. like these:
 s    h    p   .....
hee  eep  hee  .....
 p    s    s   .....
s h  h e  p h  .....
 e    e    e   .....
e p  p s  e s  .....
a character can be used more than one time in the different shapes. For example:
ssh                                    s h        s
hee                                     e        hee
epp  there are 2 shapes in the matrix: e p  and   p
Still not understand the task? Look at the following example ;-)

Example
For sheep = 
ssh
hee
eep
the output should be 1.
For sheep = 
ssh
hee
epp
the output should be 2.
For sheep = 
hsh
hee
eep
the output should be 0.
For sheep = 
sshhss
heeeeh
eppppe
the output should be 4.
For sheep = 
sshee
heesp
epphe
the output should be 6.

Note
3 x 3 < sheep.length <= 600 x 601
In order to avoid timeout, be aware of the code's performance ;-)
Using keyword let is slower than var.
*/

function count(sheep) {
  let count = 0;
  let q = sheep.indexOf("\n") + 1;
  for (let i = q + 1; i + q + 1 < sheep.length; i++) {
    if (
      sheep.charCodeAt(i) *
        sheep.charCodeAt(i - 1) *
        sheep.charCodeAt(i + 1) *
        sheep.charCodeAt(i - q) *
        sheep.charCodeAt(i + q) ==
      13664443520
    ) {
      count = count + 1;
    }
    if (
      sheep.charCodeAt(i) *
        sheep.charCodeAt(i - q - 1) *
        sheep.charCodeAt(i - q + 1) *
        sheep.charCodeAt(i + q - 1) *
        sheep.charCodeAt(i + q + 1) ==
      13664443520
    ) {
      count = count + 1;
    }
  }
  return count;
}
