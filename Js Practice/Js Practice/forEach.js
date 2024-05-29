// forEach
// Practice Questions
// 1.Log Each Item with Index:
// Write a forEach loop to log each item in the array ['cat', 'dog', 'bird'] along with its index in the format "Index X: item".

const animalsArray = ['cat', 'dog', 'bird'];
animalsArray.forEach((animal, index) => {
    console.log( `Index ${index}:${animal}`)
});

// 2.Uppercase All Strings:
// Given an array of strings ['hello', 'world', 'javascript'], use forEach to log each string in uppercase.

const stringArray = ['hello', 'world', 'javascript'];
stringArray.forEach((uppercase) => {
    console.log(uppercase.toUpperCase());
});
// 3.Calculate Total Price:
// Given an array of objects representing items in a cart, e.g., [{name: 'apple', price: 1.5}, {name: 'banana', price: 2}, {name: 'cherry', price: 3}], use forEach to calculate and log the total price of all items.

const objectsArray = [
    {name: 'apple', price: 1.5},
    {name: 'banana', price: 2},
    {name: 'cherry', price: 3},
];
let total = 0;
objectsArray.forEach((item) => {
    total += item.price
});

console.log(total);
// 4.Log Only Even Numbers:
// Given an array of numbers [1, 2, 3, 4, 5, 6], use forEach to log only the even numbers.

const numbersArray = [1, 2, 3, 4, 5, 6];
numbersArray.forEach((number) => {
    if(number % 2 === 0){
        console.log(number);
    }
});

// 5.Count Occurrences of a Character:
// Given a string 'hello world', use forEach on an array of its characters to count and log the number of times the character 'l' appears.

const countOccurences = "hello world"
let count = 0;
countOccurences.split('').forEach((char) => {
    if(char === 'l'){
        count++;
    }
})
console.log(count);

// 6.Add Suffix to Each String:
// Given an array of strings ['car', 'bike', 'bus'], use forEach to add the suffix 's' to each string and log the new strings.

const vehicles= ['car', 'bike', 'bus'];
vehicles.forEach((vehicle) => {
    console.log(vehicle + 's');
});


// 7.Create a New Array with Lengths of Strings:
// Given an array of strings ['one', 'three', 'seven'], use forEach to create a new array containing the lengths of these strings and log it.

const strings = ['one', 'three', 'seven'];
let lengths = [];
strings.forEach((string) =>{
    lengths.push(string.length);
});
console.log(lengths);
// 8.Log All Properties of an Object:
// Given an object {name: 'John', age: 30, city: 'New York'}, use forEach to log each property and its value. (Hint: Use Object.entries to get an array of key-value pairs).

let person = {name: 'John', age: 30, city: 'New York'};
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// 9.Filter and Log Words Longer Than 3 Characters:
// Given an array of words ['sun', 'moon', 'star', 'sky'], use forEach to log only the words that are longer than 3 characters.

const words = ['sun', 'moon', 'star', 'sky'];
words.forEach((word) => {
    if(word.length > 3){
        console.log(word);
    }
});

// 10.Reverse Each String in an Array:
// Given an array of strings ['hello', 'world', 'javascript'], use forEach to reverse each string and log the reversed strings.

const arr = ['hello', 'world', 'javascript'];
arr.forEach((word) => {
    console.log(word.split('').reverse().join(''));
})






