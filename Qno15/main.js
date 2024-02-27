/*
5. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to
send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating
 the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/
var guestList = ['Areeba', 'Ibad', 'Wassay', 'Rida',];
console.log("Initial guest list:");
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log(guest);
}
var unableToAttend = "Areej";
console.log("".concat(unableToAttend, " can\u2019t make it to the dinner."));
var indexOfUnableToAttend = guestList.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    var newInvites = "Noor";
    guestList[indexOfUnableToAttend] = newInvites;
    console.log("\nSecond set of invitation messages:");
    for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
        var guest = guestList_2[_a];
        console.log("Dear ".concat(guest, ", you are invited to the dinner."));
    }
}
else {
    console.log("The guest who can't make it was not found in the list.");
}
