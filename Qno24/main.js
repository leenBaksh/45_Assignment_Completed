/*  24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array  */
var city1 = "UK";
var city2 = "China";
console.log("Are city1 and city2 equal? I predict False.");
console.log(city1 == city2);
var fruit1 = "Mango";
var fruit2 = "Mango";
console.log("Are fruit1 and fruit2 equal? I predict True.");
console.log(fruit1 == fruit2);
var text = "HELLO";
console.log("Is the text in lowercase 'hello'? I predict True.");
console.log(text.toLowerCase() == "hello");
var number1 = 10;
var number2 = 20;
console.log("Is number1 less than number2? I predict True.");
console.log(number1 < number2);
console.log("Is number1 greater than or equal to number2? I predict False.");
console.log(number1 >= number2);
var sunnyDay = true;
var warmDay = false;
console.log("Is it a sunny day and a warm day? I predict False.");
console.log(sunnyDay && warmDay);
console.log("Is it a sunny day or a warm day? I predict True.");
console.log(sunnyDay || warmDay);
var fruits = ["Apple", "Banana", "Orange", "Mango"];
var searchFruit = "Banana";
console.log("Is ".concat(searchFruit, " in the array? I predict True."));
console.log(fruits.includes(searchFruit));
var vegetables = ["carrot", "Broccoli", "Spinach"];
var searchVegetable = "cabbage";
console.log("Is ".concat(searchVegetable, " not in the array? I predict True."));
console.log(!vegetables.includes(searchVegetable));
