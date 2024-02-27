/* 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
 only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a 
name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
 have an empty list at the end of your program.  */

 let guestList: string[] = ["Areeba", "Ibad", "Wassay", "Areej", "Noor"];

console.log("Initial guest list:");
for (let guest of guestList) {
    console.log(guest);
}

let unableToAttend: string = "Areej";
console.log(`${unableToAttend} can’t make it to the dinner.`);

let indexOfUnableToAttend: number = guestList.indexOf(unableToAttend);

if (indexOfUnableToAttend !== -1) {
    let newInvites: string = "Misbah";

    guestList[indexOfUnableToAttend] = newInvites;

    console.log("\nSecond set of invitation messages:");
    for (let guest of guestList) {
        console.log(`Dear ${guest}, you are invited to the dinner.`);
    }

    console.log("\nSorry, we can only invite two people for dinner.");

    while (guestList.length > 2) {
        let removedGuest: string = guestList.pop()!;
        console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
    }

    console.log("\nMessages to the two people still on the list:");
    for (let guest of guestList) {
        console.log(`Dear ${guest}, you are still invited to the dinner.`);
    }

    guestList.pop();
    guestList.pop();

    console.log("\nFinal guest list:");
    console.log(guestList);
} else {
    console.log("The guest who can't make it was not found in the list.");
}
