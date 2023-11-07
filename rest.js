const arr = [1, "two", "3"];

const obj = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}

// Write your code here.
const arrSpread = [...arr];
const arrRest = [...arr]; // Note: JavaScript does not have a "rest" operator for cloning, this is just spread.

// Cloning the object with spread
const objSpread = {...obj};
const objRest = {...obj}; // Note: This is also spread, as JavaScript does not use "rest" outside of destructuring.


console.log(arrRest);           // [1, "two", "3"]
console.log(arrSpread);         // [1, "two", "3"]

console.log(objRest);           // { red: "circle", blue: "square", green: "hexagon" }
console.log(objSpread);         // { red: "circle", blue: "square", green: "hexagon" }