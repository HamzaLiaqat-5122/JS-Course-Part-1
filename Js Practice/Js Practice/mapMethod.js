// Map Method

// 1. Convert to Uppercase:
// Given an array of strings ['hello', 'world', 'javascript'], use map to create a new array with all strings converted to uppercase.

const lowerCaseStringArray = ['hello', 'world', 'javascript'];
const uppercaseStringArray = lowerCaseStringArray.map((str) => {
    return str.toUpperCase();
});
console.log(uppercaseStringArray);

// 2. Square Each Number:
// Given an array of numbers [1, 2, 3, 4, 5], use map to create a new array with the square of each number.

const simpleNumbersArray = [1, 2, 3, 4, 5];
const squareNumbersArray = simpleNumbersArray.map((num) => {
    return num * num;
});
console.log(squareNumbersArray);

// 3. Extract Property Values:
// Given an array of objects [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}], use map to create a new array containing just the names.

const informationObjectArray = [
    {name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'},
];
const namesOnlyArray = informationObjectArray.map((persons) => {
    return persons.name
});
console.log(namesOnlyArray);

// 4. Add a Suffix:
// Given an array of strings ['car', 'bike', 'bus'], use map to create a new array where each string has the suffix 's' added.

let vehicles = ['car', 'bike', 'train'];
let pluralVehicles = vehicles.map(vehicle => vehicle + 's');
console.log(pluralVehicles); // Outputs ['cars', 'bikes', 'trains']


// 5. Calculate Ages:
// Given an array of birth years [1990, 1985, 2000, 2010], use map to create a new array with the corresponding ages assuming the current year is 2024.

const birthYears = [1990, 1985, 2000, 2010];
const currentYear = 2024;
let ages = birthYears.map(year => currentYear - year);
console.log(ages);

// 6. Convert to Boolean:
// Given an array of numbers [0, 1, 2, 3, 0], use map to create a new array where each number is converted to a boolean (true for non-zero numbers and false for zero).

const numbersArray = [0, 1, 2, 3, 0];
const booleansArray = numbersArray.map((num) =>{
    if(num > 0){
        return true;
    }
    return false;
});
console.log(booleansArray);
// 7. Increment by Index:
// Given an array of numbers [10, 20, 30, 40], use map to create a new array where each number is incremented by its index in the array.

let numbers = [10, 20, 30, 40];
const incrementedNumbers = numbers.map((number, index) => {
    return number + index;
});
console.log(incrementedNumbers);

// 8. Extract Initials:
// Given an array of names ['Alice Johnson', 'Bob Smith', 'Charlie Brown'], use map to create a new array of initials ['AJ', 'BS', 'CB'].

let names = ['Alice Johnson', 'Bob Smith', 'Charlie Brown','Hamza Liaqat'];
const initials = names.map((name) => {
    let parts = name.split(' ');
    return parts.map(part => part[0]).join('');
})
console.log(initials);

// 9. Convert Temperature:
// Given an array of temperatures in Celsius [0, 20, 30, 40], use map to create a new array of temperatures converted to Fahrenheit.

const temperaturesArray = [0, 20, 30, 40];
let fahrenheitTemps = temperaturesArray.map(celsius => celsius * 9/5 + 32);
console.log(fahrenheitTemps); // Outputs [32, 68, 86, 104]