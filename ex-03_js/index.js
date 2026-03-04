
// import Square, {size1, size2} from "./lib.js";
const {Square, size1, size2} = require("./lib")

const mySquare = new Square(size1);
console.log(`The area of mySquare is ${mySquare.area()}`);

const mySquare2 = new Square(size2);
console.log(`The area of mySquare is ${mySquare2.area()}`);