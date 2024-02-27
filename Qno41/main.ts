/* 41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints
 the name of each magician in the array.  */

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magician_names: string[] = ["Dynamo", "Harry Houdini", "Criss Angel", "Teller"];

show_magicians(magician_names);
