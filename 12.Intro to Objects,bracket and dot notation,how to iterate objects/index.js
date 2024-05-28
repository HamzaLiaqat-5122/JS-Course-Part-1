// Objects - reference type
// arrays are good but not sufficient for real world data.
// objects store key value pairs
// objects don't have index

// how to create objects

const person = {
    name : "Hamza",
    age : 19,
   "person hobbies" : ["reading", "sleeping", "listening music"]
};
console.log(typeof person, person);
console.log(person.name); // in bracket notation (person["name"]);
console.log(person.age); // this is the way to access values of objects.
console.log(person["person hobbies"]); // an array is stored in object

// how to access data from objects
console.log(person["name"]);
console.log(person["age"]);
// how to add key value pair to objects
person.gender = "male"; // person["gender"] = "male"
console.log(person);
// we use bracket notation to access two words like person hobbies in object's keys

// difference between dot and bracket notation

const key = "email";
const person1 = {
    name : "Hamza",
    age : 19,
    "person hobbies": ["guitar, sleeping, listening to music"]
}

// console.log(person["person hobbies"]);
person1[key] = "hamzaliaqat@gmail.com"; // without writing dot notation and using bracket notation without "" computes the key value.
console.log(person1);

// how to iterate objects

const person2 = {
    name : "Hamza",
    age : 19,
    "person hobbies" : ["guitar, sleeping, listening to music"]
}

// for in loop
// Object.keys

for (let key in person2) {
    console.log(key); // it gives only keys like name, age and person hobbies
}

for(let key in person2){
    console.log(person2[key]); // it gives values like Hamza and 19
}

for( let key in person2){
    console.log(`${key} : ${person2[key]}`); // it gives both key-value pair.
//  console.log(key, person2[key]);
}

console.log(Object.keys(person2)); // it will return an array
const val = Array.isArray((Object.keys(person2))); // true
console.log(val);

for(let key of Object.keys(person2)){
    console.log(person[key]);
}

let key1 = "age";
let information = {
    name : "Usman",
    role : "Student",
    "phone number" : "0333-7056605" 
}
console.log(information.name = "Hamza");
console.log(information);

console.log(information["name"] = "Subhan");
console.log(information);

console.log(information.role);
console.log(information["role"]);


information[key1] = "30";
console.log(information);

for(let key in information){
    console.log(key);
}

for(let key in information){
    console.log(information[key]);
}

console.log(Object.keys(information));
const val1 = Array.isArray((Object.keys(information)));
console.log(val1);

for(let key of Object.keys(information)){
    console.log(information[key]);
}

