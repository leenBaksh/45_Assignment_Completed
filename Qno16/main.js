/* 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
var guestList = ["Areeba", "Ibad", "Wassay", "Areej", "Noor"];
console.log("Initial guest list:");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log(guest);
}
var unableToAttend = "Areej";
console.log("".concat(unableToAttend, " can't make it to the dinner."));
var indexOfUnableToAttend = guestList.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    var newInvitee = "Noor";
    guestList[indexOfUnableToAttend] = newInvitee;
    console.log("\nSecond set of invitation messages:");
    for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
        var guest = guestList_2[_a];
        console.log("Dear ".concat(guest, ", you are invited to the dinner."));
    }
}
else {
    console.log("The guest who can't make it was not found in the list.");
}
