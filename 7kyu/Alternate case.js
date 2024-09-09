/*
Description

Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. 
E.g: Hello World -> hELLO wORLD
*/

function alternateCase(s) {
  return s
    .split("")
    .map((value) => {
      if (value != value.toUpperCase()) {
        return value.toUpperCase();
      }
      return value.toLowerCase();
    })
    .join("");
}
