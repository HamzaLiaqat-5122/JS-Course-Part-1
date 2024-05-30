const arr1 = [2, 4, 6, 8, 10];
const areEven = arr1.every(num => num % 2 === 0);
console.log(areEven);

const arr2 = ["apple", "banana", "orange", "grape"];
const greaterThan3 = arr2.every(fruit => fruit.length > 3);
console.log(greaterThan3);

const arr3 = [15, 20, 25, 30];
const greaterThan10 = arr3.every((num) => {
    return num > 10;
});
console.log(greaterThan10);

const arr4 = [true, 1, "hello", {name: "John"}];
const isTrue = arr4.every((str) => !!str) 
console.log(isTrue);

const arr5 = [5, 10, 15, 20, 25];
const divisbleBy5 = arr5.every(num => num % 5 === 0);
console.log(divisbleBy5);

const arr6 = [1, 2, 3, 4, 5];
const sameDataType = arr6.every((num, index, array) => typeof num === typeof array[0]);
console.log(sameDataType);

const arr7 = [10, 20, 30, 40, 50];
const arePositive = arr7.every(num => num > 0);
console.log(arePositive);

const arr8 = [2, 3, 5, 7, 11];
const arePrimeNumbers = arr8.every(num => {
    if(num <= 1) return false;
    for(i = 2; i < num; i++){
        if(num % i === 0){
            return true;
        }
        return false;
    }
});

const arr9 = [1, 2, 3, 4, 5];

const allUnique = arr9.every((item, index, array) => array.indexOf(item) === index);

console.log(allUnique); // Output: true

const arr10 = ["apple", "banana", "orange", "grape"];
const areAllStrings = arr10.every(fruit => typeof fruit === 'string')
console.log(areAllStrings);