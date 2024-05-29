// sort Method

// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125

const numbersArray = [34, 7, 23, 32, 5, 62];
// Expected output: [5, 7, 23, 32, 34, 62]

numbersArray.sort((a, b) => a - b);
console.log(numbersArray);

const numbers = [34, 7, 23, 32, 5, 62];
// Expected output: [62, 34, 32, 23, 7, 5]

numbers.sort((a, b) => b - a);
console.log(numbers);

const fruits = ["banana", "apple", "cherry", "date"];
// Expected output: ["apple", "banana", "cherry", "date"]

fruits.sort();
console.log(fruits);

const fruits1 = ["banana", "apple", "cherry", "date"];
// Expected output: ["date", "apple", "banana", "cherry"]

fruits1.sort((a, b) => a.length - b.length);
console.log(fruits1);

const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 30 }
];
// Expected output: [{ name: "Bob", age: 22 }, { name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]

people.sort((a, b) => {
    return a.age - b.age;
});
console.log(people);

const people1 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 30 }
];
// Expected output: [{ name: "Alice", age: 25 }, { name: "Bob", age: 22 }, { name: "Charlie", age: 30 }]


people1.sort((a, b) => a.name.localeCompare(b.name));
console.log(people1); // [{ name: "Alice", age: 25 }, { name: "Bob", age: 22 }, { name: "Charlie", age: 30 }]

const items = ["Banana", "apple", "Cherry", "date"];
// Expected output: ["apple", "Banana", "Cherry", "date"]

items.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(items); // ["apple", "Banana", "Cherry", "date"]

const numbers2 = [5, 3, 8, 6, 7, 2];
// Expected output: [8, 6, 2, 5, 3, 7]

numbers2.sort((a, b) => {
    return (a % 2) - ( b % 2) || a - b;
});
console.log(numbers2);
