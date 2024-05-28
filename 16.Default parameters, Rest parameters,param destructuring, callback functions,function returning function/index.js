// default parameters

// function addTwo(a, b = 0){
//     return a + b;
// }

// const ans = addTwo(4);
// console.log(ans);
// in this case we use default parameter by assigning b = 0 be would have been undefined if we write (a, b) in param and when we call function we write (a) and not b.

// rest parameters

// function myFunc(a, b,...c){
//     console.log(` a is ${a}`);
//     console.log(` b is ${b}`);
//     console.log(` c is ` , c);
// }

// myFunc(3,4,5,6,7,8,9);
// ...c is rest parameter it takes the rest values 5,6,7,8,9

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
       total = total + number;
    }
    return total;
}

const ans = addAll(1,2,3,4,5);
console.log(ans);

// param destructuring

// object
// react

const person = {
    firstName : "hamza",
    gender : "male",
    age : 500,
}

// function printDetails(obj){
    //     console.log(obj.firstName);
    //     console.log(obj.gender);
    // }
    function printDetails({firstName, gender, age}){
        console.log(firstName);
        console.log(gender);
        console.log(age);
    }

printDetails(person);

// callback functions

// function myFunc(a){
//     console.log(a);
//     console.log('hello world');
//}

function myFunc(callback){
    console.log("hello there i am function and i can..");
    callback("hamza");
}

// myFunc([1,2,3]); // array
// myFunc("abc") // string
// myFunc({name: "hamza"}) // object

function myFunc2(name){
    console.log("inside my func 2");
    console.log(`your name is ${name}`);
}

myFunc(myFunc2);

// function returning function

function myFunc3(){
    function hello(){
     return "hello world"
    }
    return ;
}

const ans1 = myFunc3();
console.log(ans1);

