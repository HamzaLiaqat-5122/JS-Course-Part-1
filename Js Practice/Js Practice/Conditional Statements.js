//  Conditional Statements

//  1.Even or Odd
//   Write a JavaScript program to check if a number is even or odd. Use conditional statements to print "Even" or "Odd" accordingly.

 function  isEvenOrOdd(num) {
     if(num % 2 == 0){
         return "Even"
     }
     else{
         return "Odd"
     }
 }

 console.log(isEvenOrOdd(3));

//   2.Largest of Three Numbers: Write a JavaScript program to find the largest of three given numbers. Use conditional statements to compare the numbers and print the largest one.



 function isLargest(num1, num2, num3){
     if(num2 > num1 && num2 > num3){
         return num2;
     }
     else if(num3 > num2 && num3 > num1){
         return num3;
     }
     else if(num1 > num2 && num1 > num3){
         return num1;
     }
 }

 console.log(isLargest(1, 3, 5));

//   3.Leap Year: Write a JavaScript program to check if a given year is a leap year or not. Leap years are divisible by 4 but not by 100 unless they are also divisible by 400.

 function isLeapYear(year){
     if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
         return true;
     } else {
         return false;
     }
 }
 console.log(isLeapYear(4));
 console.log(isLeapYear(400));
 console.log(isLeapYear(2024));
 console.log(isLeapYear(2023));

//   4.Temperature Converter: Write a JavaScript program that converts temperatures from Celsius to Fahrenheit or from Fahrenheit to Celsius based on user input. Use conditional statements to determine the conversion formula based on user choice.

 function temperatureConverter(scale, temp){
     if(scale === 'C'){
         return (temp * 9 / 5) + 32;
     } else if (scale === "F"){
         return (temp - 32) * 5 / 9;
     }
     else{
         return "Invalid Scale";
     }

 }
 console.log(temperatureConverter('C', 37));
 console.log(temperatureConverter('F', 98.6));

//   5. Grading System: Write a JavaScript program that takes a student's score as input and prints out their grade. Use conditional statements to determine the grade based on the score, e.g., A for scores above 90, B for scores between 80 and 89, and so on.

 function grades(marks) {
     if(marks >= 90 ){
         return "A"
     }
     else if(marks >= 80 ){
         return "B"
     }
     else if(marks >= 70 ){
         return "C"
     }
     else if(marks >= 60 ){
         return "D"
     }
     else{
         return "F"
     }
 }

 console.log(grades(87));

//   6.Vowel or Consonant: Write a JavaScript program that checks if a given letter is a vowel or a consonant. Use conditional statements to determine and print the result.

 function isVowelorConsonant(alphabet){
     if(alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" || alphabet === "u"){
         return "Vowel";
     } else{
         return "Consonant"
     }
 }

 console.log(isVowelorConsonant("a"));
 console.log(isVowelorConsonant("v"));

//  Meta AI

//  If-Else Statements

//  1. Write a program to check if a number is positive, negative, or zero.
let number = 4;
if(number > 0){
    console.log("positive");
} else if(number < 0){
    console.log("negative");
} else {
    console.log("zero");
}

//  2. Write a program to check if a person is eligible to vote based on their age.
let age = 19;
if (age >= 18){
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

//  3. Write a program to check if a password is strong (has at least 8 characters, including uppercase, lowercase, and numbers).

let password = "HamZA124";
if(password.length === 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password)){
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}

