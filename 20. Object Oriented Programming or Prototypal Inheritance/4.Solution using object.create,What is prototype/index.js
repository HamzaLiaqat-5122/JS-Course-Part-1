// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old` 
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing : function(){
//         return 'toon na na na la la';
//     }
// }
// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// const user1 = createUser('hamza', 'liaqat', 'hamza@gmail.com', 19, 'myAddress');
// const user2 = createUser('subhan', 'liaqat', 'hamza@gmail.com', 13, 'myAddress');
// const user3 = createUser('usman', 'liaqat', 'hamza@gmail.com', 17, 'myAddress');

// console.log(user1);
// console.log(user1.about());
// console.log(user3.about());


// Solution using Object.create

// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }

// __proto__

// official ecmascript documentation

// [[prototype]]

// __proto__ , [[prototype]]

// prototype

// There is one way to create empty object in js
// const obj2 = Object.create(obj1);
// obj2.key3 = "value3",
// obj2.key2 = "unique";
// console.log(obj2.key2);

// console.log(obj2.__proto__);  // it gives obj1 = {key1: 'value1', key2: 'value2'}

function hello (){
    console.log("hello world!");
}
hello();

// javascript function ===> function + object

// console.log(hello.name); // it tells name of the function

// you can add your own properties in functions

hello.myOwnProperty = "vey unique value";
console.log(hello.myOwnProperty);
// in this way function behaves like object and give key value pair

// name property --> tells function name;

// function provides more useful properties.

// function gives us free space or empty object {} prototype

// console.log(hello.prototype); // {} prototype is object which is empty and it has one property constructor which is function in this case.

// only functions provide prototype property

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "lalalla";
};
console.log(hello.prototype.sing());


// __proto__ and prototype have no connection right now but we can make connection.

