/* 
5. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to 
send out a new set of invitations. You’ll have to think of someone else to invite. 
• Start with your program from Exercise 14. Add a print statement at the end of your program stating
 the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/

let guestList: string[] = ['Areeba', 'Ibad', 'Wassay', 'Rida',]
console.log("Initial guest list:");
for (let guest of guestList) {
    console.log(guest);
}

let unableToAttend: string = "Areej";
console.log(`${unableToAttend} can’t make it to the dinner.`);

let indexOfUnableToAttend: number = guestList.indexOf(unableToAttend);

if (indexOfUnableToAttend !== -1) {
    let newInvites: string = "Noor";
    guestList[indexOfUnableToAttend] = newInvites;
    console.log("\nSecond set of invitation messages:");
    for (let guest of guestList) {
        console.log(`Dear ${guest}, you are invited to the dinner.`);
    }
} else {
    console.log("The guest who can't make it was not found in the list.");
}