const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet.add(6));
console.log(mySet.delete(3));
console.log(mySet.has(2));
console.log(mySet.has(7));
console.log(mySet);
console.log(mySet.size);
for(const value of mySet){
    console.log(value);
}
const myArray = [...mySet];
console.log(myArray);

const newArray = [1, 2, 2, 3, 4, 4, 5];
const myNewSet = new Set([...newArray]);
console.log(myNewSet);

const setA = new Set([1, 2, 3]);
const setB= new Set([3, 4, 5]);
const union = new Set([...setA,...setB])
console.log(union);

const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection);

const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log(difference);

const duplicateArray = [1, 1, 2, 3, 3, 4, 5, 5];
const noDuplicatesSet = new Set([...duplicateArray]);
console.log(noDuplicatesSet);

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];

const set1 = new Set([...arr1,...arr2,...arr3]);
console.log(set1);