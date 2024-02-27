/* 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests 
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list. */

let guestList: string[] = ["Areeba", "Ibad", "Wassay", "Areej", "Noor"];
console.log("Initial guest list:");
for (let guest of guestList) {
    console.log(guest);
}

let unableToAttend: string = "Areej";
console.log(`${unableToAttend} can't make it to the dinner.`);

let indexOfUnableToAttend: number = guestList.indexOf(unableToAttend);

if (indexOfUnableToAttend !== -1) {
    let newInvitee: string = "Noor";

    guestList[indexOfUnableToAttend] = newInvitee;

    console.log("\nSecond set of invitation messages:");
    for (let guest of guestList) {
        console.log(`Dear ${guest}, you are invited to the dinner.`);
    }
} else {
    console.log("The guest who can't make it was not found in the list.");
}
