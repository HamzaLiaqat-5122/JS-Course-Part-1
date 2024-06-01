// iterables
// jispe hum for of loop laga sakein
// string, arrays are iterable but objects are not iterable

// const firstName = "Hamza";
// for(let char of firstName){
//     console.log(char);
// }

// const items = ['item1', 'item2', 'item3'];
//    for(let item of items){
//         console.log(item);
//     }

// const users = {'key1': 'value1', 'key2': 'value2'}
//  for(let user of Object.keys(users)){
//      console.log(user,users[user]);
//  }

// array like object
// jinke pas length property hoti hai
// aur jisko hum index se access kar sakte hai
// example :- string

// const firstName = "hamza";
// console.log(firstName.length);
// console.log(firstName[2]);

// sets (it is iterable)
// store data
// sets also have its own methods
// no index-based access
// order is not guaranteed
// unique items only(no duplicates allowed)

// const numbers = new Set([1, 2, 3]);
// const numbers = new Set ("abc"); // each character becomes a separate element a, b, c
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(['item1', 'item2', 'item3']); // address example : x00
// numbers.add(['item1', 'item2', 'item3']); // address exampe : x000
// both are different so they will be stored in set
// numbers.add(items);
// numbers.add(items); both are same so one will be stored and other will be ignored.
// numbers.add(items);
// if(numbers.has(1)){
//     console.log("1 is present");
// }
// else{
//     console.log("1 is not present");
// }
// console.log(numbers);
// console.log(numbers[2]);

// for(let number of numbers){
//     console.log(number);
// } // set is iterable

// we use sets when we have to work with unique values or items and not duplicates.

// const myArray = [1, 2, 4, 4, 5, 6, 5, 6];
// const uniqueElements = new Set(myArray);
// console.log(uniqueElements); // it will give only unique value and not the duplicates.
// console.log(uniqueElements.length); // undefined

// To find length of uniqueElements we use for of loop
// let length = 0;
// for(let element of uniqueElements){
//     length++
// }
// console.log(length);

// we can find the length of the set by using size property

// console.log(uniqueElements.size)

// if we have to delete something from set
// console.log(uniqueElements.delete(2));
// console.log(uniqueElements); // now 2 will be deleted from uniqueElements Set.

// - add(value): Adds a new element to the Set.
// - delete(value): Removes an element from the Set.
// - has(value): Checks if an element is in the Set.
// - clear(): Removes all elements from the Set.
// - size(): Returns the number of elements in the Set.

// You can easily convert a set to an array using the spread operator or the Array.from method:

// const myArray = [...mySet];
// const myArray2 = Array.from(mySet);

// const myArray = [...mySet];
// const myArray2 = Array.from(mySet);

// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// difference between maps and objects

// objects can only have string or symbol as key

// in maps you can use anything as key
// like array, number, string

// const person = { // objects literal // key -> string // key -> symbol
//     firstName : "hamza",
//     age: 7,
//     1: "one"
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person['1']);
// for (let key in person){
//     console.log(typeof key); // string
// }

// const person = new Map();
// person.set('firstName', 'Hamza');
// person.set('age', '7');
// person.set(1, 'one');
// person.set([1, 2, 3], 'onetwothree');
// person.set({1: 'one'}, 'one');
// console.log(person); // in object our key can be string or a symbol
// but in map we can store any data-type

// to get values of keys in map we use
// console.log(person.get('firstName')); // hamza
// console.log(person.get('age')); // 7
// console.log(person.get(1));  // one

// to get all keys in map we use
// console.log(person.keys());

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

//for(let key of person){
//  console.log(key);
//} // it will return arrays with key value pairs unlike objects which gives only keys

// for(let [key, value] of person){
//     console.log(key, value);
// } // in this way we can directly apply for of loop on map it gives key value pairs without arrays like objects when we use object.keys

// const person = new Map([['firstName', 'hamza'],['age', 19]])
// console.log(person); in this way we can also store key-value pairs

// const person1 = {
//     id: 1,
//     firstName: "hamza"
// }

// const person2 = {
//     id: 1,
//     firstName: "hamza"
// }

// const userInfo = new Map();
// userInfo.set(person1, {age: 20, gender: "male"});
// userInfo.set(person2, {age: 21, gender: "female"});
// // console.log(userInfo);
// console.log(person1.id);
// console.log(userInfo.get(person1).gender);
// console.log(userInfo.get(person2).gender);

