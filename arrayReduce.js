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

const totalYears = friends.reduce((acc, friend) => {
    // Your accumulation logic goes here.
    return acc + friend.yearsOfFriendship;
}, 0); // Initialize the accumulator to 0.
console.log(totalYears);                        // 19