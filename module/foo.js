const circle = require('./circle.js');
const Square = require('./square-class.js');
const {} = require('./example.js');

// simple module usage
console.log(`Area of r=4 circle is ${circle.area(4)}`);
console.log(circle.sayHello());

//imported module with class
const mysquare = new Square(2);
console.log(mysquare.area());

console.log(double(10));
