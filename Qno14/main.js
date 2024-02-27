/*  14 .Guest List: If you could invite anyone, living or deceased, to dinner, who would you
invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */
var guests = ["Areej", "Areeba", "Rida"];
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ", You are invited to dinner at my place (123 Main St, Islamabad) this saturday at 7 pm. Looking forward to seeing you there!"));
}
