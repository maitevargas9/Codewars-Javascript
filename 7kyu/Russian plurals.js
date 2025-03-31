/*
Description

There is an easy Kata about plurals.

You aren't able to use any string/array/object methods, libs etc. You have to use only couple of math operators and 
conditionals. "+" and "-" operators also disabled.

There is a common task to use it with words. For example:
makePlural(['day', 'days'], 1) => 0 days
makePlural(['day', 'days'], 1) => 1 day
makePlural(['day', 'days'], 2) => 2 days
makePlural(['day', 'days'], 12) => 12 days

You need only 2 forms and pretty easy logic in your function. Every number requires plural form except for 1.

Of course, it doesn't work in Russian. We have 3 forms and a more interesting rule.
For example:
makePlural(['день', 'дня', 'дней'], 0) => 0 дней // looks like plural English
makePlural(['день', 'дня', 'дней'], 1) => 1 день // singular, like in English too
makePlural(['день', 'дня', 'дней'], 2) => 2 дня // somehting new? It's genitive singular case
makePlural(['день', 'дня', 'дней'], 3) => 3 дня
makePlural(['день', 'дня', 'дней'], 4) => 4 дня
makePlural(['день', 'дня', 'дней'], 5) => 5 дней // again plural
...
makePlural(['день', 'дня', 'дней'], 11) => 11 дней // again plural
...
makePlural(['день', 'дня', 'дней'], 20) => 20 дней // ok, 20 is plural, it's ok
makePlural(['день', 'дня', 'дней'], 21) => 21 день // 21 is singular?
makePlural(['день', 'дня', 'дней'], 22) => 22 дня // genitive singular case again :-( 
...
* (The word 'день' is a "day" in Russian)

Ok, these were a couple of examples only to scare you. The Russian rule is easy too:
Number endings: 1 (example: 1, 21, 41, 121) (but not 11, 111 etc.) — singular.
Number endings: 2,3,4 (example: 22, 42, 123) (but not 12, 13 & 14) — genitive singular.
Number endings: 5,6,7,8,9,0 (includes 11, 12, 13, 14) — genitive plural.

Write a function that accepts an array of word forms [singular, genitive singular, genitive plural] and a number as 
parameters. It should return a string with the correct form.

_* There is an array ['день', 'дня', 'дней'] in test cases for easier debugging _
*/

const makePlural = (options, number) => {
  if (number >= 5 && number <= 20) {
    return options[2];
  }

  const lastDigit = number % 10;

  if (lastDigit === 1) {
    return options[0];
  } else if (lastDigit >= 2 && lastDigit <= 4) {
    return options[1];
  } else {
    return options[2];
  }
};
