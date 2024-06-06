// const user1 = {
//     firstName : "hamza",
//     lastName: "liaqat",
//     email: "hamzaliaqat@gmail.com",
//     age: 2,
//     address: "House Number, Colony, pincode, state",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old` 
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }
// function (that function create object)
// 2, ) add key value pair
// 3, ) object ko return karega
// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about =  function(){
//         return `${this.firstName} is ${this.age} years old` 
//     }
//     user.is18 = function(){
//         return this.age >= 18;
//     }
//     return user;
// }
// const user2 = createUser('hamza', 'liaqat', 'hamza@gmail.com', 3, 'myAddress')
// console.log(user2);
// const is18 = user2.is18();
// const about = user2.about();
// console.log(is18);
// console.log(about);

// In this way methods are stored in each object we make. this is not good practice.

// Now we are taking methods outside objects and storing them in new function.

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old` 
    },
    is18 : function(){
        return this.age >= 18;
    }
}
function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    return user;
}
const user1 = createUser('hamza', 'liaqat', 'hamza@gmail.com', 19, 'myAddress');
const user2 = createUser('subhan', 'liaqat', 'hamza@gmail.com', 13, 'myAddress');
const user3 = createUser('usman', 'liaqat', 'hamza@gmail.com', 17, 'myAddress');

console.log(user1.about());
console.log(user3.about());

