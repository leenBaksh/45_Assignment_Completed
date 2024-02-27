/* 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message 
indicating the number of people you are inviting to dinner. */

const guests: string[] = ["Areej", "Areeba", "Ibad", "Wassay", "Noor"];

function printNumberOfGuests(guestList: string[]): void {
    const numberofGuests: number = guestList.length;
    console.log(`You are inviting ${numberofGuests} people to dinner.`);
}

printNumberOfGuests(guests);
