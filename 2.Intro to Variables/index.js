// Intro to Variables

// variables can store some information 
// we can use that information later
// we can change that information later

// declare a variable

var firstName = "Hamza";    var lastName = "Liaqat";

// use a variable
console.log(firstName);   console.log(lastName);

// change value

firstName = "Mohid";     lastName = "Imran";

console.log(firstName);  console.log(lastName);

// rules for naming variables

// you cannot start with number
// example :-
// 1value (invalid)
// value1 (valid)

var value1 = 2;
console.log(value1 + 3);

// you can use only underscore _ or dollar $ symbol
// first_name (valid)
// _firstname (valid)

// first$name (valid)
// $firstname (valid)

var $firstname = 34;
console.log($firstname);

// you cannot use spaces
// var first_name = "hamza"; // snake case writing
// var firstName = "hamza"; // camel case writing
// first name (invalid)

// convention
// start with small letter and use camelCase

// let keyword
// declare variable with let keyword

let fstName = "Hamza";
fstName = "Mohit";
console.log(fstName);

 

// block scope vs function scope (covered later in this video)

// declare constants

const pi = 3.14;

console.log(pi);