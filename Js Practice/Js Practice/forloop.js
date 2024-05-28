// for loop

// 1. Write a for loop that prints numbers from 1 to 10

for(let i = 1; i <= 10; i++){
    // console.log(i);
   }

// 2. Using a for loop, print the even numbers from 1 to 20.


for(let i = 2; i <= 20; i+= 2){
    console.log(i);
}

// 3. Create a multiplication table for a given number (e.g., 5) using a for loop.

const number = 5; // The number for which we want to create the multiplication table

// console.log("Multiplication table for " + number + ":");

for (let i = 1; i <= 10; i++) {
    // console.log(number + " * " + i + " = " + (number * i));
}

// 4.Write a program that calculates the sum of all numbers from 1 to 100 using a for loop.
let sum = 0;
for(let i = 1; i <= 100; i++){
   sum += i;
}

console.log("The sum of all the numbers from 1 to 100 is : ", sum);

// 5.implement a nested for loop to print a pattern of asterisks (e.g., a triangle shape) in JavaScript:

const rows = 5; // Number of rows in the triangle

console.log("Triangle pattern:");

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}
let a = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10, 11, 12, 13, 14, 15, 16 ,17, 18 ,19, 20]
for (let i = 0; i < a ; i++) {
    let b =[]
    if(a[i] % 2 === 0){
        b.push(a[i])
    }
    console.log(b)
    
}
for(let i = 0 ; i <= 20 ; i++){
    // let a= i % 2 === 0
    console.log(i)
    i++

}