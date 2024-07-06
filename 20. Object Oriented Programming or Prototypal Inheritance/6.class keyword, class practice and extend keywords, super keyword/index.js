// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }

// CreateUser.prototype.about =  function(){
//     return `${this.firstName} is ${this.age} years old.`
// }
// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// }
// CreateUser.prototype.sing = function(){
//     return "toon na na na la la";
// }

// const user1 = new CreateUser("hamza", "liaqat", "hamza@gmail.com", 18, "bla bla");
// const user2 = new CreateUser("subhan", "hassan", "subhan@gmail.com", 7, "ble bla");
// const user3 = new CreateUser("usman", "zahid", "usman@gmail.com", 9, "blu bla");

// console.log(user1);
// console.log(user3.is18());

// apko nahi lagta ke kitna tidious kaam he ke pehle ham constructor bana rahe hen phir ham us constructor ke prototype ma hm apne method ko add kr rahe hen aur phir new keyword laga kr call kr rahe hen ya apko jo prototype ma khud se add krna par raha hen na ya mushkil kaam h jab ap ko use krna parega inheritance to apko ya kaam bar bar karna parega to ya hamare liye sahi nahi  

// class keyword
// javascript ma es6 / 2015 ma aya tha class
// jo log pehle java c++ python aisi language se familiar hen unhe pata hoga k hamare pass hogi classes hm classes ko use krte hen . hm us class ma kia krte hen k us ke properties ko aur methods ko aik hi jagah pa define karte hen
// yahi kaam ham javascript ma bhi kar sakte hen.

// uper jo CreateUser us ko ham class use kr ke aur efficient aur asaan bana sakte hen.

// classes are fake

// line num1 se le kar line num17 wala kam ma dobara karo ga class keyword use kr ke.

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    console.log("constructor called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  // hm class ke andar hi apne methods ko define kr sakte hen
  about() {
    return `${this.firstName} is ${this.age} years old.`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "toon na na na la la";
  }
}

const user1 = new CreateUser("hamza","liaqat","hamza@gmail.com",18,"bla bla");
const user2 = new CreateUser("subhan","hassan","subhan@gmail.com",7,"ble bla");
const user3 = new CreateUser("usman", "zahid", "usman@gmail.com", 9, "blu bla");

console.log(Object.getPrototypeOf(user1)); 

// new keyword ke bina constructor call nhi hoga.

// class practice

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}

// const animal1 = new Animal("tom", "3");
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());
// console.log(animal1.isCute());

// dog class

// class Dog{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isSuperCute(){
//         return this.age <= 1;
//     }
//     isCute(){
//         return true;
//     }
// }

// extend keyword

// class Dog extends Animal {}

// is se dog class ke paas Animal class ki sari properties hogi like name aur age
// methods bhi honge

// const tommy = new Dog("tommy", 3);
// console.log(tommy);
// console.log(tommy.isCute());

// is tarah easy way say class keyword ka ham ne use kia

// uper new keyword h. constructor to he hi nhi dog class ma phir new ka kia kamm
// Ans: kyu ke Dog class Animal class se properties le rhi aur Animal class ma constructor he

// Above dog is called subclass and Animal is called parent class.
// javascript ma object ya instance aik hi ha.

// ham ne agar dog kitni speed se dorta ha to kese krein.

// Super Keyword

class Dog extends Animal {
  constructor(name, age, speed){
    super(name, age) // super keyword kafi famous ha super ka matlab hamari parent Animal class
    // ya super kia kre ga ke Animal class ke constructor se name aur age le aye ga baqi speed ko ham khud likh len ge.

    this.speed = speed;
  }
  run(){
    return `${this.name} is running at the speed of ${this.speed} kmph`
  }
}


const tommy = new Dog("tommy", 1, 45);
console.log(tommy);
console.log(tommy.run()); // output: tommy is running at the speed of 45kmph.