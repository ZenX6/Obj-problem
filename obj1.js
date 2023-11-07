const obj = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}

// Write your code here.
const {green,...rest} = obj
const objClone = {...rest, yellow : "pentagon"}
console.log(objClone);          // { red: "circle", blue: "square", yellow: "pentagon" }
console.log(green);             // hexagon


let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];
let [firstEl, secondEl,thirdEl, fourthEl,fifthEl, sixthEl] = bigArray
console.log(firstEl);  
console.log(secondEl); 
console.log(thirdEl);  
console.log(fourthEl); 
console.log(fifthEl);  
console.log(sixthEl);  
// Example:
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"