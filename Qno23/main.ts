/* 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your 
prediction for the results of each test. Your code should look something like this: 

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

let num1 = 10;
let num2 = 10;
console.log("Is num1 equal to num2? I predict True.");
console.log(num1 == num2);

let str1 = "Hello";
let str2 = "World";
console.log("Is str1 equal to str2? I predict False.");
console.log(str1 == str2);

let x = 5;
let y = 10;
console.log("Is x not equal to y? I predict True.");
console.log(x != y);

let a = 15;
let b = 15;
console.log("Is a not equal to b? I predict False.");
console.log(a != b);

let age = 23;
let legalAge = 19;
console.log("Is age greater than legalAge? I predict True.");
console.log(age > legalAge);

let score = 80;
let passingScore = 90;
console.log("Is score greater than passingScore? I predict False.");
console.log(score > passingScore);

let price = 20;
let budget = 50;
console.log("Is price less than budget? I predict True.");
console.log(price < budget);

let temperature = 28;
let freezingPoint = 0;
console.log("Is temperature less than freezingPoint? I predict False.");
console.log(temperature < freezingPoint);

let sunny = true;
let warm = true;
console.log("Is it sunny AND warm? I predict True.");
console.log(sunny && warm);

let raining = true;
let windy = false;
console.log("Is it raining AND windy? I predict False.");
console.log(raining && windy);
