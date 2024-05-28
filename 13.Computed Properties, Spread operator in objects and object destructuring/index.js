// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2"
// }

const obj = {
    [key1] : value1,
    [key2] : value2
}
// we use square bracket to get computed keys.
console.log(obj);

const obj1 = {};

obj1[key1] = value1;
obj1[key2] = value2;
console.log(obj1);

// Spread operator in object

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

const newArray = [...array1 , ...array2];
console.log(newArray);

const stringArray = [..."abc"];
console.log(stringArray); // it will spread characters of strings separately.
// integers are not iterables
// This is an example of using spread operator in arrays

// Now using Spread Operator in Objects
const obj2 = {
    key1: "value1",
    key2: "value2",
};
console.log(obj2);

const obj3 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
}

// const newObject = {...obj3, ...obj2};
// const newObject = {...obj3, ...obj2, key60: "value60"};
const newObject = {... "abc"};  // it gives index as keys and abc as values
console.log(newObject);

// object destructuring

const band = {
    bandName : "led zeppelin",
    famousSong : "stairway to heaven",
    year : 1968,
    anotherFamousSong: "kashmir",
};

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

const {bandName:var1, famousSong:var2, ...restProps} = band;
console.log(var1);
console.log(var2);
console.log(restProps);
