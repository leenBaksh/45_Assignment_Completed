/*   29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits
in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should
print a statement, such as You really like bananas!   */
var favorite_fruits = ["Mango", "Banana", "Orange"];
if (favorite_fruits.includes("Mango")) {
    console.log("You really like Mango!");
}
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("You really like kiwis!");
}
