/* 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
 only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
 have an empty list at the end of your program.  */
var guestList = ["Areeba", "Ibad", "Wassay", "Areej", "Noor"];
console.log("Initial guest list:");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log(guest);
}
var unableToAttend = "Areej";
console.log("".concat(unableToAttend, " can\u2019t make it to the dinner."));
var indexOfUnableToAttend = guestList.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    var newInvites = "Misbah";
    guestList[indexOfUnableToAttend] = newInvites;
    console.log("\nSecond set of invitation messages:");
    for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
        var guest = guestList_2[_a];
        console.log("Dear ".concat(guest, ", you are invited to the dinner."));
    }
    console.log("\nSorry, we can only invite two people for dinner.");
    while (guestList.length > 2) {
        var removedGuest = guestList.pop();
        console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
    }
    console.log("\nMessages to the two people still on the list:");
    for (var _b = 0, guestList_3 = guestList; _b < guestList_3.length; _b++) {
        var guest = guestList_3[_b];
        console.log("Dear ".concat(guest, ", you are still invited to the dinner."));
    }
    guestList.pop();
    guestList.pop();
    console.log("\nFinal guest list:");
    console.log(guestList);
}
else {
    console.log("The guest who can't make it was not found in the list.");
}
