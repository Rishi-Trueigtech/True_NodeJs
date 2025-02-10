const calc = require('./module');

let x=50,y=10;

console.log("Addition of 50 and 10 is "
    + calc.add(x, y));

console.log("Subtraction of 50 and 10 is "
    + calc.sub(x, y));

console.log("Multiplication of 50 and 10 is "
    + calc.mult(x, y));

console.log("Division of 50 and 10 is "
    + calc.div(x, y));