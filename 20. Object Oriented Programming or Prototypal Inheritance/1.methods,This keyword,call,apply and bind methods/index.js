// methods
// function inside object

// const person = {
//     firstName : "hamza",
//     age: 19,
//     about : function(){
//         console.log("person name is hamza and person age is 19");
//     }
// }
// console.log(person.about); // it gives the whole function
// person.about(); // it prints the function of about key.

// But there is a problem if we change the firstName then if we call the function it will print firstName hamza which was the initial name however I have changed it.

// const person = {
    // firstName : "mohid",
    // age : 7,
    // about: function(){
        // console.log(`person name is ${firstName} and person ${age} is 19`); 
        // we cannot write like above it will give error we have to use "this" before variable.
        // console.log(`person name is ${this.firstName} and person age is ${this.age} `);
    // }
// }
// person.about(); // Now our problem is solved by using "this" it gives us the changed values.

// Now we will understand "this"
// we don't know the value of "this" when we write our code. We know the value "this" when we run our code.
// in above function "this" is an object which is calling above function
// method is defined in object and function defined in object is called method
// in person.about(); about is method and person is calling this method. In this method "this" is person. "this" is whole person object

// const person = {
//     firstName : "mohid",
//     age : 7,
//     about: function(){
//         // console.log(this); // "this" prints {firstName: 'mohid', age: 7, about:f}
//         // console.log(this.firstName, this.age); // mohid 7
//        console.log(`person name is ${this.firstName} and person age is ${this.age} `);
//     }
// }
// person.about();

// if we remove the function from person obj and defined it outside

// function personInfo(){
//     console.log(`person name is ${this.firstName} and person age is ${this.age} `);
//  }

// const person1 = {
//     firstName : "mohid",
//     age : 7,
//     about: personInfo
// }
// const person2 = {
//     firstName : "hamza",
//     age : 19,
//     about: personInfo
// }
// const person3 = {
//     firstName : "subhan",
//     age : 8,
//     about: personInfo
// }

// personInfo(); // person name is undefined and person age is undefined
// person1.about(); // person name is mohid and person age is 7
// person2.about(); // person name is hamza and person age is 19
// person3.about(); // person name is subhan and person age is 18

// console.log(this); // it prints window object
// console.log(window); // it prints window object

// function myFunc(){
//     console.log("hello world");
// }
// myFunc(); // hello world
// window.myFunc(); // hello world
// if i write window on console i can see myFunc is added on window object

// function myFunc(){
//     console.log(this);
// }
// window.myFunc(); // it will print window object because window is calling myFunc

// strict mode in js

// function myFunc(){
//     "use strict";
//     console.log(this);
// }
// myFunc(); // it will print undefined

// function hello(){
//     console.log("hello world");
// }
// hello(); // hello world

// we can call the function by using .call();
// function hello(){
//     console.log("hello world");
// }
// hello.call(); // hello world
// call, apply and bind

// const user1 = {
//     firstName : "hamza",
//     age: 19,
//     about: function(hobby, favMusician){
//         console.log(this.firstName, this.age);
//     }
// }
// const user2 = {
//     firstName : "ayan",
//     age: 9,
// }
// // there is no about method in user2 obj but i have to use it without copying it

// user1.about.call(user2, "guitar", "moazrt"); // ayan 9 guitar moazrt
// // user1.about.call(); // undefined undefined

// function about(hobby, favMusician){
//     console.log(this.firstName, this.age, hobby, favMusician);
// }

// const user1 = {
//     firstName : "hamza",
//     age: 19,
// }
// const user2 = {
//     firstName : "ayan",
//     age: 9,
// }

// about.call(user2, "guitar", "moazrt"); // ayan 9 guitar moazrt
// // using apply we have to pass arguments in array
// // about.apply(user1, ["guitar", "bach"]);

// // using bind it returns function
// const func = about.bind(user1, "guitar", "bach");
// func();


