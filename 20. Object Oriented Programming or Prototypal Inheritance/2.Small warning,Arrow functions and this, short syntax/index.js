// small warning

// const user1 = {
//     firstName : "hamza",
//     age: 19,
//     about: function(){
//         // console.log(this); // it is representing window not the object
//         console.log(this.firstName, this.age);
//     }
// }

// don't do this mistake

// user1.about();

// const myfunc = user1.about.bind(user1)
// myfunc(); // it gives undefined undefined

// arrow functions --> their behaviour is different from other functions

// const user1 = {
//     firstName : "hamza",
//     age: 19,
//     about: () => {
//         // console.log(this); // it is representing window not the object
//         console.log(this.firstName, this.age);
//     }
// }
// user1.about();

// arrow functions don't have "this" they take "this" from their surroundings and we cannot change "this"

// user1.about.call(user1);  // this does not works

// short syntax
// const user1 = {
//     firstName : "hamza",
//     age: 19,
//     about: () => { 
//         console.log(this.firstName, this.age);
//     }
// }
// user1.about();

