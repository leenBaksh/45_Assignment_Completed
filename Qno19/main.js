/* 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message
indicating the number of people you are inviting to dinner. */
var guests = ["Areej", "Areeba", "Ibad", "Wassay", "Noor"];
function printNumberOfGuests(guestList) {
    var numberofGuests = guestList.length;
    console.log("You are inviting ".concat(numberofGuests, " people to dinner."));
}
printNumberOfGuests(guests);
