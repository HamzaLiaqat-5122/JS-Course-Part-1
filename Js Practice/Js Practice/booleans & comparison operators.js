// Booleans & Comparison Operators

// 1. Write a JavaScript statement that checks if a variable age is greater than 18 and prints "You are an adult" if true.

let prompt = require('prompt-sync')();
let age = +prompt("Enter your Age");

if(age >= 18){
    console.log("You are an adult");
} else {
    console.log("You are a child");
}

// 2. Use a Boolean variable isAdmin to check if a user is an administrator and print "Access granted" if true.

if (isAdmin === true){
    console.log("Access Granted");
}

// 3. Write a JavaScript expression that checks if a variable password is equal to "secret" (ignoring case).

password.toLowerCase() === "secret";

// 4. Use a comparison operator to check if a variable temperature is less than 0 and print "Freezing" if true.

 if(temperature < 0){
    console.log("freezing");
 }

 // 5. Write a JavaScript statement that checks if a variable name is not equal to "John" and prints "Hello stranger" if true.

 if(namee !== "John"){
    console.log("Hello stranger");
 }

 // 6.Use a Boolean variable isStudent to check if a user is a student and print "You have a discount" if true.

 if(isStudent === true){
    console.log("You have a discount");
 }

 // 7. Write a JavaScript expression that checks if a variable score is greater than or equal to 80.
 score >= 80
 // 8. Write a JavaScript statement that checks if a variable email contains "@(link unavailable)" and prints "Valid email" if true.
 
 if(email.includes("@(link unavailable)")){
    console.log("Valid email");
 }
 // The includes() method checks if the string email contains the substring "@(link unavailable)".

 // 9. Use a comparison operator to check if a variable time is greater than 12 and print "Good afternoon" if true.

 if(time > 12){
    console.log("Good afternoon");
 }

 // 10. Use a Boolean variable isVerified to check if a user is verified and print "Access denied" if false.

 if(!isVerified){
    console.log("Access denied");
 }