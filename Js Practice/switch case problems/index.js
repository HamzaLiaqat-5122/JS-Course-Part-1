// // Switch case Problems

// // Easy Problems

// // 1.Days of the week: Write a program that takes a number from 1 to 7 as input and prints the corresponding day of the week. For example, if the input is 1, the output should be "Monday".

function daysOfWeek(days) {
    switch(days){
        case 1 :
            console.log("Monday");
            break;
        case 2 :
            console.log("Tuesday");
            break;
        case 3 :
            console.log("Wednesday");
            break;
        case 4 :
            console.log("Thirsday");
            break;
        case 5 :
            console.log("Friday");
            break;
        case 6 :
            console.log("Saturday");
            break;
        case 7 :
            console.log("Sunday"); 
            break;
        default :
        console.log("Invalid Day");

    }
}

daysOfWeek(7);

// // 2.Basic calculator: Create a simple calculator program that takes two numbers and an operator (+, -, *, /) as input and performs the corresponding operation.

function calculate(num1, operator, num2){
    switch (operator) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
    
        default:
            return NaN;
            break;
    }
}

console.log(calculate(4, '/', 4));

// // 3.Grade calculator: Write a program that takes a numerical grade as input and prints the corresponding letter grade according to a grading scale (e.g., A for 90-100, B for 80-89, etc.).

function getLettergrade(grade){
    switch (true) {
        case (grade >= 90):
            return 'A';
            break;
        case (grade >= 80):
            return 'B';
            break;
        case (grade >= 70):
            return 'C';
            break;
        case (grade >= 60):
            return 'D';
            break;
        case (grade >= 50):
            return 'E';
            break;
    
        default:
            return 'F'
            break;
    }
}

console.log(getLettergrade(95));

// // 4.Month name: Create a program that takes a number from 1 to 12 as input and prints the corresponding month name.

// function getMonthName(month){
//     switch (month) {
//         case 1:
//             return "January";
//             break;
//         case 2:
//             return "February";
//             break;
//         case 3:
//             return "March";
//             break;
//         case 4:
//             return "April";
//             break;
//         case 5:
//             return "May";
//             break;
//         case 6:
//             return "June";
//             break;
//         case 7:
//             return "July";
//             break;
//         case 8:
//             return "August";
//             break;
//         case 9:
//             return "September";
//             break;
//         case 10:
//             return "October";
//             break;
//         case 11:
//             return "November";
//             break;
//         case 12:
//             return "December";
//             break;
    
//         default:
//             return "Invalid Month";
//             break;
//     }
// }

// console.log(getMonthName(7));

// // 5.Simple menu: Implement a simple menu-driven program that presents the user with options (e.g., 1. Add, 2. Subtract, 3. Multiply, 4. Divide) and performs the selected operation.

// function showMenu(){
//     console.log("1. Add");
//     console.log("2. Subtract");
//     console.log("3. Multiply");
//     console.log("4. Divide");
// }

// function performOperation(operation, a, b){
//     switch (operation) {
//         case 1:
//             return a + b;
//             break;
//         case 2:
//             return a - b;
//             break;
//         case 3:
//             return a * b;
//             break;
//         case 4:
//             return a / b;
//             break;
    
//         default:
//             return NaN;
//             break;
//     }
// }

// showMenu();
// console.log(performOperation(1, 3, 5));

// // Normal Problems

// // 1.Traffic light:
// // Write a program that simulates a traffic light. It takes a color as input ('red', 'yellow', or 'green') and prints the action that should be taken by a driver.

// // function trafficLightColor() {
// //     console.log("1. Red");
// //     console.log("2. Yellow");
// //     console.log("3. Green");
// // }

// // function actionByDriver(a) {
// //     switch (a) {
// //         case 1:
// //             return "The Signal is red. Please wait 30 seconds"
// //             break;
// //         case 2:
// //             return "The Signal is yellow. Please wait 5 seconds"
// //             break;
// //         case 3:
// //             return "The Signal is green. You can Go"
// //             break;
    
// //         default:
// //             return "You are breaking Rules"
// //             break;
// //     }
    
// // }

// // trafficLightColor();
// // console.log(actionByDriver(1));

// function trafficLightColor(color){
//     switch (color) {
//         case 'red':
//             return 'Stop'
//             break;
//         case 'yellow':
//             return 'Hold'
//             break;
//         case 'green':
//             return 'Go'
//             break;
    
//         default:
//             return 'Invalid Color'
//             break;
//     }
// }

// console.log(trafficLightColor('yellow'));
// console.log(trafficLightColor('red'));
// console.log(trafficLightColor('green'));

// // 2.Language translator:
// // Create a program that translates a word from English to another language. The program should take a word and a language code ('es' for Spanish, 'fr' for French, etc.) as input and print the translation.

// function translate(word, languageCode){
//     switch (languageCode) {
//         case 'es':
//             return 'Hola'
//             break;
//         case 'fr':
//             return 'Bonjour'
//             break;
//         case 'de':
//             return 'Hallo'
//             break;
    
//         default:
//             return "Language not Supported"
//             break;
//     }
// }
// console.log(translate('Hello','es'));
// console.log(translate('Hello','fr'));
// console.log(translate('Hello','de'));

// // 3.Weekend Days
// // Write a program that takes a day of the week as input and determines if it's a weekend day or a weekday.

// function isWeekend(week){
//     switch (week) {
//         case 'Saturday':
//         case 'Sunday':
//             return true;
//             break;
//         default:
//             return false;
//             break;
//     }
// }

// console.log(isWeekend('Monday'));
// console.log(isWeekend('Saturday'));
// console.log(isWeekend('Sunday'));

// // 4. Simple Game Menu
// // Create a menu for a simple text-based game. The menu should allow the player to choose between different actions (e.g., play, save, load, quit).

// function gameMenu(option){
//   switch (option) {
//     case 'play':
//         return 'Starting the Game';
//         break;
//     case 'save':
//         return 'Saving Progress';
//         break;
//     case 'load':
//         return 'Loading saved Game';
//         break;
//     case 'quit':
//         return 'Are you sure, You want to quit the Game?';
//         break;
  
//     default:
//         return 'Invalid Option';
//         break;
//   }
// }

// console.log(gameMenu('play'));
// console.log(gameMenu('save'));
// console.log(gameMenu('load'));
// console.log(gameMenu('quit'));
// console.log(gameMenu('map'));

// META AI Switch Case Problems

// 1.Write a switch statement to check the value of a variable day and print the corresponding day of the week (e.g., "Monday", "Tuesday", etc.).

let day = 0
switch (correspondingDay){
    case 0:
        return "Sunday"
        break;
    case 1:
        return "Monday"
        break;
    case 2:
        return "Tuesday"
        break;
    case 3:
        return "Wednesday"
        break;
    case 4:
        return "Thursday"
        break;
    case 5:
        return "Friday"
        break;
    case 6:
        return "Saturday"
        break;

    default:
         return "Invalid Day"
        break;
}

// 2.Use a switch statement to check the value of a variable grade and print the corresponding grade letter (e.g., "A", "B", "C", etc.).

switch (grade) {
    case (grade >= 90):
        return "A"
        break;
    case (grade >= 80):
        return "B"
        break;
    case (grade >= 70):
        return "C"
        break;
    case (grade >= 60):
        return "D"
        break;

    default:
        return "Invalid Grade";
        break;
}   