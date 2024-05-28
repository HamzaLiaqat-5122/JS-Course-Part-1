// String Indexing

let firstName = "HamzaDj";

// H   a  m  z  a  D  j
// 0   1  2  3  4  5  6

// console.log(firstName[6]);
// length of string
// firstName.length

console.log(firstName.length);


// last Index : length - 1
console.log(firstName[firstName.length-1]);

// some string methods

// trim() removes unwanted spaces

let fstName = "   hamza   "   ; // spaces are counted as length

console.log(fstName.length);
let newString = fstName.trim(); // "hamza"
console.log(newString);
console.log(newString.length); 

// strings are immutable which means applying trim method on fstName will not change original fstName we have to declare a new variable like new String to store it or reassign the new value to fstName.

// toUpperCase() 
// converts all the the letters of string to uppercase

// firstName = firstName.toUpperCase();


// toLowerCase()
// converts all the letters of string to lowercase

// firstName = firstName.toLowerCase();

// slice

// start index
// end index

let brandNewString = firstName.slice(1,5); // 5th index will not be included

console.log(brandNewString);