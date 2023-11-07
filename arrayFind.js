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