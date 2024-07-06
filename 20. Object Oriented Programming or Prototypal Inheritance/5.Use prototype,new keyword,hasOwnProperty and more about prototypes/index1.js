// Use Keyword

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
//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// console.log(createUser.prototype);
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old` 
// }
// createUser.prototype.is18 = function(){
//     return this.age >= 18;
// }
// createUser.prototype.sing = function(){
//     return 'toon na na na la la';
// }

// const user1 = createUser('hamza', 'liaqat', 'hamza@gmail.com', 18, 'myAddress');
// const user2 = createUser('subhan', 'liaqat', 'hamza@gmail.com', 13, 'myAddress');
// const user3 = createUser('usman', 'liaqat', 'hamza@gmail.com', 17, 'myAddress');

// console.log(user1);
// console.log(user1.is18());

// new keyword

// function createUser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }
// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
// }
// const user1 = new createUser("hamza", 4);
// // new keyword is doing this tasks
// // 1.) empty object. this = {}
// // 2.) return this

// console.log(user1); // user1 is now object



// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }
// console.log(CreateUser.prototype);
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old` 
// }
// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// }
// CreateUser.prototype.sing = function(){
//     return 'toon na na na la la';
// }

// const user1 =new CreateUser('hamza', 'liaqat', 'hamza@gmail.com', 18, 'myAddress');
// const user2 =new CreateUser('subhan', 'liaqat', 'hamza@gmail.com', 13, 'myAddress');
// const user3 =new CreateUser('usman', 'liaqat', 'hamza@gmail.com', 17, 'myAddress');

// console.log(user1);
// console.log(user1.is18());

// Note: Any function in which we use new keyword we use capital letters like CreateUser.

function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
console.log(CreateUser.prototype);
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old` 
}
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
}
CreateUser.prototype.sing = function(){
    return 'toon na na na la la';
}

const user1 =new CreateUser('hamza', 'liaqat', 'hamza@gmail.com', 18, 'myAddress');
const user2 =new CreateUser('subhan', 'liaqat', 'hamza@gmail.com', 13, 'myAddress');
const user3 =new CreateUser('usman', 'liaqat', 'hamza@gmail.com', 17, 'myAddress');

for(let key in user1){
    // console.log(key); // it is also giving keys of protoype we want only keys of CreateUser
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
} 
// hasOwnProperty gives only property or keys of user1

// More about Prototype

// let numbers = [1, 2, 3];
// let numbers = new Array(1, 2, 3);
// console.log(Array.prototype); we get methods of array from this
// console.log(Object.getPrototypeOf(numbers));
// console.log(numbers);

function hello(){
    console.log("hello");
}
// prototype
