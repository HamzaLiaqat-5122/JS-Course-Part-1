// class Animal {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//     eat() {
//       return `${this.name} is eating`;
//     }
//     isSuperCute() {
//       return this.age <= 1;
//     }
//     isCute() {
//       return true;
//     }
//   }
  
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
  
  
  // same method in base class 
  
//   class Dog extends Animal {
//     constructor(name, age, speed){
//       super(name, age) // super keyword kafi famous ha super ka matlab hamari parent Animal class
//       // ya super kia kre ga ke Animal class ke constructor se name aur age le aye ga baqi speed ko ham khud likh len ge.
  
//       this.speed = speed;
//     }

//     eat(){
//         return `modified eat: ${this.name} is eating`
//     }

//     run(){
//       return `${this.name} is running at the speed of ${this.speed} kmph`
//     }
//   }
  
  
//   const tommy = new Dog("tommy", 1, 45);
//   console.log(tommy);
//   console.log(tommy.run());
//   console.log(tommy.eat()); // output : modified eat: tommy is eating 
// is ka matlab he Animal ma bhi eat tha aur mene uper Dog class ma bhi eat ko define kia kyu ma eat ko modified krna chahta tha agar ma modify na karta phir eat ko call krta to wohi Animal class wali output ati.

  // getters and setters

  // pehle to ma simple aik person class bna leta hoon

//   class person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//   }
// const person1 = new person("hamza", "don", 19);
// console.log(person1.fullName()); // hamza don

// ham properties ko call nahi krte par methods/functions ko call krna parta ha agar ma simple fullName likho to pura ka pura function print ho jaye ga.

// agar ma chahata ho ke fullName jo method ha is ko propterty ki tarah use kroon yani ya bina paranthesis ke call ho jaye to ma fullName se pehle get likh do ga

// console.log(person1.fullName); // ab kiya hua ke get likhne se ma apne fullName ko property ki tarah use kr rha call kye baghair.

// agar ab ma fullName ko call kron to error aye ga.

// setter

// agar ma chahata ho apne person1 object bnane ke baad us ka firstName aur lastName change kr do to ma aik setName() function bnao ga person class ma

// class person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     setName(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//   }
// const person1 = new person("hamza", "don", 19);
// console.log(person1.firstName); // output : hamza
// console.log(person1.lastName); // output : don
// person1.setName("hamza", "liaqat"); // after changing values in setName
// console.log(person1.firstName);// output : hamza
// console.log(person1.lastName); // output : liaqat

// aik aur tareeqa change krne ka firstName aur lastName ke values.

// person1.firstName = "usman";
// person1.lastName  = "zahid"; // is tarah
// console.log(person1.firstName); // output: usman
// console.log(person1.lastName);  // output : zahid

// agar abhi ma ya likho
// person1.fullName = "subhan hassan" // aur is console.log kro to nhi hoga par aisa kro ga kese

// pehle ma setName function ko htao ga phir fullName aik function bnao ga aur us ke parameter ma fullName pass kro ga phir fullName function ke andar fullName ko split kr lo ga spaces se

// class person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     set fullName(fullName){
//         // fullName.split(" "); // is se space se piche se split ho jaye ga aur array ki form ma result aye ga. ma ab firstName aur lastName ke variables bnao ga destructuring se aur unhe fullName.split(" ") ke equal set kr doon ga.

//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//   }
// const person1 = new person("hamza", "don", 19); // pehle naam hamza don tha
// person1.fullName = "subhan hassan" // ab mene subhan hassan kia
// console.log(person1); // output ma set fullName ke function se subhan hassan a gaya
// console.log(person1.fullName); // output: subhan hassan

// static methods and properties

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return 'this is person class';
    }
    static desc = "lala";
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // misaal ke taur par ma aur bhi methods bana leta hoon.
    eat(){
        return `${this.firstName} is eating`
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
  }

  // ab ma person class se aik object bana leta ho aur use person variable ma store kr deta hoon.

  const person1 = new Person("hamza", "liaqat", 13);
  // ab ma koi method call krta ho class se bne object ka

  console.log(person1.eat());

  // ye jo mere eat, isSuperCute, isCute, fullName methods sare objects se related hen jo object bane ga person class se us se related hen.

  // but ma aise methods bhi bana sakta hoon jo meri person class se directly related hon ge.. jin ko call krne ke liye mujhe object banane ki zarurat nhi he ma directly class pa call kr sakta hoon usay.

  // forExample : ma aik static likh ke us ke age classInfo ke naam se function bnata hoon

  // ma apne static classInfo method ko object pa call nhi kr sakte.

//   person1.classInfo(); // it will throw error.
// but ma static methods ko apni class ka naam le kr call kar sakta hoon
console.log(Person.classInfo()); // now it worked and output is this is person class

// jaise static methods hote hen is tarah static properties bhi hen mere paas.aur inhe use kab karte hen ham.
// dekhein apne projects bnayen ge ham tab ma apko btaon ga ke kab ham use krte hen

// phir bhi bata deta hoon thora sa - ForEx : hamne apni app ko initialize krna ha ya hamme apni app ko run krne ke liye ham aik class bana lete hen choti si us class ma static methods bana lete hen ham static methods init kr ke.. is se hamme help milti he app ko initialize krne ki.

// static property ko ham class ka naam likh kr access kr sakte hen.

console.log(Person.desc); // output : lala