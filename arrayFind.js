const friends = [
    {
        name: "Albert",
        yearsOfFriendship: 3
    },
    {
        name: "Angela",
        yearsOfFriendship: 2
    },
    {
        name: "Freddy",
        yearsOfFriendship: 8
    },
    {
        name: "Agatha",
        yearsOfFriendship: 6
    }
];
const vowels = 'aeiouAEIOU'
// Hint: create an array of vowels to use in your solution.
const threeVowelFriend = friends.find(friend => {
    const count = friend.name.split('').reduce((acc, char) =>{
        return vowels.includes(char) ? acc + 1 : acc
    }, 0)

    return count >= 3


});
console.log(threeVowelFriend.name);             // Angela



// Write your code for `restSum` here
function restSum(...numbers){
    return numbers.reduce((acc, current) => acc + current, 0)
}
console.log(restSum(3,5,6)); // => 14
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
console.log(restSum(0)); // => 0


const spreadItOut = (array1, array2) => {
    return [...array1, ...array2]
  }
  
  console.log(spreadItOut([3,5,6], [1,2,3])); // => [3,5,6,1,2,3];
  console.log(spreadItOut([], [1,2,3])); // => [1,2,3];
  console.log(spreadItOut(["apple", "banana"], [1,2,3])); // => ["apple", "banana", 1, 2, 3];


  let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
let object2 = {location: 'NY', borough: 'Brooklyn'};

const breakDownObj = obj => {
  const keys = Object.keys(obj)
  const value = Object.values(obj)
  return [...keys, ...value]
}

console.log(breakDownObj(object1));          // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
console.log(breakDownObj(object2));          // => [ 'location', 'borough', 'NY', 'Brooklyn' ]