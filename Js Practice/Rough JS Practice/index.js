// let variable = "anything"
// console.log(variable);

// console.log(typeof variable);

// const obj = {
//     name1 : "hamza",
//     role : "programmer",
//     age : 19
// }

// obj["name1"] = "usman";
// console.log(obj);

// // word meaning dictionary of 5 words
// let dict = {
//     good : "acha",
//     fat : "mota",
//     hungry: "bhooka",
//     boy: "usman",
//     thief : "chor"
// }

// console.log(dict);

// let age = 49;
// if (age >= 10 && age <= 20) {
//   console.log("The age of the person lies between 10 and 20");
// } else {
//   console.log("The age of the person does not lies between 10 and 20");
// }

// function days(dayOfWeek) {
//   switch (dayOfWeek) {
//     case 0:
//       return "Sunday";
//       break;
//     case 1:
//       return "Monday";
//       break;
//     case 2:
//       return "Tuesday";
//       break;
//     case 3:
//       return "Wednesday";
//       break;
//     case 4:
//       return "Thursday";
//       break;
//     case 5:
//       return "Friday";
//       break;
//     case 6:
//       return "Saturday";
//       break;
//     default:
//       return "Invalid Day";
//       break;
//   }
// }

// console.log(days(3));

// let number = 6;
// if (number % 2 === 0 && number % 3 === 0){
//     console.log("The number is divisible by 2 and 3");
// } else {
//     console.log("The number is not divisible by 2 and 3");
// }

// let num = 2;
// if (num % 2 === 0 || num % 3 === 0){
//     console.log("The number is either divisible by 2 or 3");
// } else{
//     console.log("The number is not divisible by 2 or 3");
// }

// let _age = 13;
// let canDrive = _age >= 18 ? "You can drive" : "You cannot drive"
// console.log(canDrive);

// let marks = {
//     hamza : 100,
//     subhan : 50,
//     usman : 0
// }

// for (let i = 0; i < Object.keys(marks).length; i++) {
//     console.log("The marks of " +Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
// }

// for(let keys in marks){
//     console.log("The marks of " + keys + " are " + marks[keys]);
// }

// let cn = 3;
// let i;
// while(i !== cn){
//     console.log("Try Again!");
//     i = prompt("Enter a Number ")
// }
// console.log("You have entered a correct number");

// let meanOf4Numbers = (a, b, c, d) => {
//     return(a + b + c + d) / 4 ;
// }

// console.log(meanOf4Numbers(4,  5, 6, 7));

// console.log(e);

//let arr1 = ["item1", "item2"];
// let arr2 = arr1.slice(0);
// let arr2 = [].concat(arr1);
//let arr2 = [...arr1, "item4"];


//arr1.push("item3");
//console.log(arr1);
//console.log(arr2);

// let num1 = 4;
// let num2 = num1;
// console.log(num1);
// console.log(num2);
// num1++;

// console.log(num1);
// console.log(num2);

// const myArray = ["value1", "value2"];
// let [myvar1, myvar2] = myArray;
// console.log("value of myvar1 is " + myvar1);
// console.log("value of myvar2 is " + myvar2);

// const myArray = ["value1", "value2", "value3"];
// let [myvar1, , myvar2] = myArray;
// console.log("value of myvar1 is " + myvar1);
// console.log("value of myvar2 is " + myvar2);


// const myArray = ["value1","value2","value3","value4"];
// let [myvar1, , myvar2] = myArray;
// console.log("value of myvar1 is " + myvar1);
// console.log("value of myvar2 is " + myvar2);
// let myNewArray = myArray.slice(2); 
// console.log(myNewArray);

// const myArray = ["value1","value2","value3","value4"];
// let [myvar1, myvar2,...myNewArray] = myArray;
// console.log(myNewArray);

// const numberArray = [3, 4, 6, 7];
// let newNumberArray = numberArray.push(4);
// console.log(newNumberArray);

// console.log(numberArray);

// const numberArray = [3, 5, 6, 7]; 
// numberArray.push(4);
// console.log(numberArray);

// const person = {
//     name : "hamza",
//     age : 22,
//     role : "programmer"
// }

//  for(let key in person){
//      console.log(key, ":", person[key]);
//  }

// for(let key of Object.keys(person)){
//     console.log(key, ":", person[key]);
// }

// const details = {name : "superman", role : "superhero"}
// for(let detail in details){
//     console.log(detail,details[detail]);
// }
// for(let detail of Object.keys(details)){
//     console.log(detail, details[detail]);
// }


// let obj = {
//     name : "led zeppelin",
//     famousSong : "Stairway to heaven",
//     year : 1989
// }

// let {name:newName, famousSong:newFamousSong, ...restProps} = obj;
// console.log(newName);
// console.log(newFamousSong);
// console.log(restProps);

// let objectArray = [
//     {userId: "1", firstName: "hamza", age: 18 },
//     {userId: "2", firstName: "subhan", age: 18 },
//     {userId: "3", firstName: "usman", age: 18 }
// ]

// let [{userId:newUserId1}, , {age:newAge3}] = objectArray;

// console.log(newUserId1);
// console.log(newAge3);

// const addNumbers = (a, b) => {
//     return a + b;
// }

// console.log(addNumbers(2, 8));

// const even = number => number % 2 === 0;
// console.log(even(2));

const firstChar = anyString => anyString[0];
console.log(firstChar("hamza"));

