// 1. Write a function greet(name) that returns a string "Hello, " + name + "!".

// function greet(name){
//   console.log("Hello, " + name + "!");
// }

// greet("hamza");

function greet(name) {
    return "Hello, " + name + "!";
  }

console.log(greet("John Wick"));

// 2. Write a function add(a, b) that returns the sum of two numbers.
const add = function(a, b){
    return a + b;
} 

console.log(add(3,4));


// 3. Write a function isEven(num) that returns true if a number is even and false if it's odd.
const isEven = num => num % 2 === 0;
console.log(isEven(3));

// 4. Write a function getStringLength(str) that returns the length of a string.
const getStringLength = str => str.length;
console.log(getStringLength("NineLetterString"));

// 5. Write a function reverseString(str) that returns the reverse of a string.

// const reverseString = str => str.split("").reverse().join("") ;
// console.log(reverseString("anas"));

const reverseString = str => [...str].reverse().join("") ;
console.log(reverseString("anas"));

// 6. Write a function getMax(a, b) that returns the maximum of two numbers.
const getMax = (a, b) => {
    return a > b ? a : b;
}

console.log(getMax(3,4));

// 7. Write a function isPalindrome(str) that returns true if a string is a palindrome and false if it's not.
const isPalindrome = str => str.split("").reverse().join("") === str;
console.log(isPalindrome("racecar"));
// 8. Write a function sumArray(arr) that returns the sum of all numbers in an array.

function getSum(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array");
    }
    return arr.reduce((a, b) => a + b, 0);
  }

console.log(getSum([3, 4, 5, 6]));
// 9. Write a function removeVowels(str) that returns a string without vowels.
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
  }

  console.log(removeVowels("hamza"));

// 10. Write a function countVowels(str) that returns the number of vowels in a string.
function countVowels(str) {
    return str.replace(/[^aeiou]/gi, '').length;
  }

console.log(countVowels("hello world")); // Output: 3
console.log(countVowels("aeiou")); // Output: 5

// 11. Write a function getLongestWord(sentence) that takes a string sentence as input and returns the longest word in the sentence.

function getLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
  
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }

console.log(getLongestWord("Hy!, Hello Hamza"));
