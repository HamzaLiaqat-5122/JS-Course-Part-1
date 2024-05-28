// While Loop

// 1. Write a while loop that prints numbers from 1 to 10.

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2. Using a while loop, print the Fibonacci sequence up to the 10th term.

let a = 0;
let b = 1;
let count = 0;

console.log("Fibonacci sequence up to the 10th term");

while (count < 10) {
    console.log(a);
    const nextTerm = a + b;
    a = b;
    b = nextTerm;
    count++;
}

const prompt = require('prompt-sync')();

// 3. Create a guessing game where the user has to guess a secret number between 1 and 100. Use a while loop to continue prompting the user for guesses until they guess the correct number.

const secretNumber = Math.floor(Math.random() * 100) + 1;

// Initialize variables
let guess;
let attempts = 0;

// While loop to prompt the user for guesses until they guess the correct number
while (true) {
    guess = parseInt(prompt("Guess the secret number (between 1 and 100):"));
    attempts++;

    // Check if the guess is correct
    if (guess === secretNumber) {
        console.log("Congratulations! You guessed the correct number in " + attempts + " attempts.");
        break; // Exit the loop
    } else if (guess < secretNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Too high! Try again.");
    }
}

// 4. Write a program that calculates the factorial of a given number using a while loop.

// Prompt the user to enter a number
const number = parseInt(prompt("Enter a number to calculate its factorial:"));

// Check if the number is negative
if (number < 0) {
    console.log("Factorial is not defined for negative numbers.");
} else {
    // Initialize variables
    let factorial = 1;
    let i = 1;

    // Calculate the factorial using a while loop
    while (i <= number) {
        factorial *= i;
        i++;
    }

    // Print the result
    console.log("The factorial of " + number + " is: " + factorial);
}

// 5.implement a countdown timer that starts from 10 and prints the countdown to 1 using a while loop in JavaScript

let countdown = 10

while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}