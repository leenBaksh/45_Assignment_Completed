/* 10 .Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
If you don’t have anything specific to write because your programs are too simple at this point, just 
add your name and the current date at the top of each program file. Then write one sentence describing 
what the program does. */

let favNum: Number = 97;
let message = `My Favorite Number is ${favNum}.`;
console.log(message);

function addNumbers(a : any, b : any ){
    return a + b;
};

let sum = addNumbers(3 , 5);
console.log(`The Sum of 3 and 5 is ${sum}`);
