// find Method

const numbers = [1, 3, 5, 7, 8, 10];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven);

const people = [
    { name: 'John', age: 15 },
    { name: 'Jane', age: 22 },
    { name: 'Mike', age: 17 },
    { name: 'Sarah', age: 19 }
  ];
  const adult = people.find(person => person.age > 18);
  console.log(adult);
  
const strings = ['cat', 'elephant', 'dog', 'dolphin', 'fox'];
const longString = strings.find(str => str.length > 5);
console.log(longString);

const numberss = [4, 2, 5, -3, 7, -8, 1];
const firstNegative = numberss.find(number => number < 0);
console.log(firstNegative);

const tasks = [
    { title: 'Do laundry', completed: true },
    { title: 'Clean room', completed: false },
    { title: 'Study JavaScript', completed: false },
    { title: 'Go grocery shopping', completed: true }
  ];
  const incompleteTask = tasks.find(task => task.completed === false);
  console.log(incompleteTask);
  
  const numbersss = [4, 6, 8, 9, 10, 11, 15];
  const firstPrime = numbersss.find(num => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  });
  console.log(firstPrime); // Output: 11

const words = ['apple', 'racecar', 'banana', 'level', 'world'];
const firstPalindrome = words.find(word => word.split('').reverse().join('') === word);
console.log(firstPalindrome);

const people1 = [
    { name: 'John', city: 'Los Angeles' },
    { name: 'Jane', city: 'New York' },
    { name: 'Mike', city: 'Chicago' },
    { name: 'Sarah', city: 'New York' }
  ];
  const personFromNY = people1.find(person => person.city === 'New York');
  console.log(personFromNY);
  
  const products = [
    { name: 'Laptop', price: 999 },
    { name: 'Mouse', price: 19 },
    { name: 'Keyboard', price: 49 },
    { name: 'Pen', price: 2 }
  ];
  const cheapProduct = products.find(product => product.price < 20 );
  console.log(cheapProduct);
  
  const books = [
    { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling' }
  ];
  const jkRowlingBook = books.find(book => book.author === 'J.K. Rowling');
  console.log(jkRowlingBook);
  
  const arr1 = [1, 2, 6, 4, 8, 11];
  const stPrime = arr1.find(num => {
    if(num <= 1) return false;
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
        return true;
    }
  });
  console.log(stPrime);