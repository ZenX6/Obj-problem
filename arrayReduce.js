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


const sentence = "What is the most common character in this sentence";

const mostCommonChar = sentence => {
    const charObj = {}
    let maxChar = ""
    let max = 0

    for (let char of sentence){
        if (char !== " "){
            charObj[char] = (charObj[char] || 0) + 1
        }
    }

    for (const char in charObj){
        if (charObj[char] > max){
            max = charObj[char]
            maxChar = char
        } 
    }
    return maxChar
}

console.log(mostCommonChar(sentence));           //  "t"


const nestedObj = {
    a: "aloe",
    b: {
        c: "cello",
        d: "dello"
    },
    e: {
        f: "fellow",
        g: {
            h: "hello",
            i: "io"
        },
        j: "jello"
    }
}

const printDepthOfTwo = obj => {
    let valuesAtDepthTwo = [];

    for (let key in obj) {
        
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
           
            for (let nestedKey in obj[key]) {
                valuesAtDepthTwo.push(obj[key][nestedKey]);
            }
        }
    }

    return valuesAtDepthTwo;
}

console.log(printDepthOfTwo(nestedObj));               // cello dello fellow { h: "hello", i: "io" } jello

const sequence = "pop";
const sequence1 = "kayak";
const sequence2 = "yo banana boy";
const sequence3 = "this is the truth";
const sequence4 = "abab";

const isPalindrome = seq => {
    const cleanedSeq = seq.replace(/\s+/g, '').toLowerCase();
    const charCount = {};

    for (const char of cleanedSeq) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let oddCount = 0;
    
    for (const count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
        }


        if (oddCount > 1) {
            return false;
        }
    }

    
    return true;
}

console.log(isPalindrome(sequence));             // true;
console.log(isPalindrome(sequence1));            // true
console.log(isPalindrome(sequence2));            // true
console.log(isPalindrome(sequence3));            // false
console.log(isPalindrome(sequence4));            // true
// because "abab" can be rearranged into a palindrome, "abba"


function anagrams(word1, word2) {
    if (word1.length !== word2.length){
        return false
    }

    let word1Count = {}
    let word2Count = {}

    for (const char of word1){
        word1Count[char] = (word1Count[char] || 0) + 1

    }

    for (const char of word2){
        word2Count[char] = (word2Count[char] || 0) + 1
    }

    for (const char in word1Count){
        if (word1Count[char] !== word2Count[char]){
            return false
        }
    }
    return true
}

console.log(anagrams("cat", "act"));          // true
console.log(anagrams("restful", "fluster"));  // true
console.log(anagrams("cat", "dog"));          // false
console.log(anagrams("boot", "bootcamp"));    // false