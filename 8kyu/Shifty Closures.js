/*
Description

Functional closures can get overly attached. Set them straight!

Why doesn't greetAbe() actually greet Abe?

let name = 'Abe'

const greetAbe = () => 'Hello, ' + name + '!'

name = 'Ben'

const greetBen = () => 'Hello, ' + name + '!'
*/

const greetAbe = (
  (name) => () =>
    "Hello, " + name + "!"
)("Abe");
const greetBen = (
  (name) => () =>
    "Hello, " + name + "!"
)("Ben");
