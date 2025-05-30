/*
Description

Strings, strings, strings (Hard)

Overview

After you recovered toString() for booleans, numbers and numerical arrays last time, you now realise that because, 
you have to be able to convert complex arrays containing any and all data types into strings too!

Task
You have to fix and improve upon the toString() method for arrays according to the criteria specified below.

I. Numerical Arrays
For arrays containing numbers only, you have to convert the array to a string where the contents of the string 
resembles what an array looks like in Javascript code. Here are a few examples:
[].toString() === "[]"
[3.14].toString() === "[3.14]"
[1,2,3].toString() === "[1,2,3]"
[1,2.72,4,3.14,9].toString() === "[1,2.72,4,3.14,9]"
Notice that in this version of "Strings, strings, strings", you are not allowed to leave spaces between elements 
in an array. If you leave any spaces you will fail the test.

II. Arrays Containing Strings
For arrays containing strings, the format is the same except if element of the array is a string, the "stringified" 
version of that element must have single quotes around it.
["Hello World",3.14,"Lorem Ipsum"].toString() === "['Hello World',3.14,'Lorem Ipsum']"
Please note that while unnecessary whitespace will not be accepted, whitespace that already exists in strings must 
be preserved; that is, "Hello World" should NOT be converted into "HelloWorld".

III. Arrays in arrays
In this version of "Strings, strings, strings", you must be able to correctly handle with and stringify nested arrays. 
For example:
[1,[2,4]].toString() === "[1,[2,4]]"
[1,2,[3,4],[5,6],[[7]],[8,[9]]].toString() === "[1,2,[3,4],[5,6],[[7]],[8,[9]]]"
There can be as many levels of nested arrays as the test cases allow. Therefore, you may want to use recursion or a 
similar method.

IV. Arrays with Booleans
This should be really straightforward. Anyway here's a few examples:
[true,false].toString() === "[true,false]"
*/

Array.prototype.toString = function () {
  function stringifyElement(el) {
    if (Array.isArray(el)) {
      return el.toString();
    } else if (typeof el === "string") {
      return `'${el}'`;
    } else if (typeof el === "boolean") {
      return el ? "true" : "false";
    } else if (typeof el === "number") {
      return String(el);
    } else {
      return String(el);
    }
  }

  return "[" + this.map(stringifyElement).join(",") + "]";
};
