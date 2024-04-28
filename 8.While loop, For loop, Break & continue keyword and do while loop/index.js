// while loop

// 0 to 9
// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5); this is not a good pratice.

// we have other shorter method to do this

// let i = 0
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// i++;
// console.log(i);
// dry don't repeat yourself

// i = 0
// while (i <= 3){
//     console.log(i);
//     i++;   
// }

// while loop example
// let num = 10;
// let total = 0;
// let e = 0;

// while(e <= 10){
//     total = total + e;
//     e++;
// }
// console.log(total);

let num = 10
let total = (num * (num + 1)) / 2; // formula for sum of 10 natural numbers
console.log(total);

// For loop
// print 0 to 9

for(let i = 0; i <= 10; i++){
    console.log(i);
}

// for loop example

let total1 = 0;
let num1 = 10;

for(let i = 1; i <= num1; i++){
    total1 = total1 + i;
}
console.log(total1);

// break keyword

// for(let i = 1; i<= 10; i++){
//     if(i === 4){
//         break; after 3 execution stops
//     }
//     console.log(i);
// }
// console.log("hello there");

// continue keyword
for(let i = 1; i<= 10; i++){
    if(i === 4){
        continue; // 4 is skipped
    }
    console.log(i);
}
console.log("hello there");

// do while loop

let i2 = 10;
// while( i2 <= 9){
//     console.log(i);
//     i++;
// }

do{
    console.log(i2);
    i2++;
}while(i2 <= 9); // do while loop always runs once whether the condition is true or false.

console.log("value of i2 is", i2);