/* 44.Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter 
that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the 
function three times, using a different number of arguments each time.  */

function make_sandwich(sandwich_items: string[]): void {
    console.log("You ordered a sandwich with:");
    for (let item of sandwich_items) {
        console.log("- " + item);
    }
}

make_sandwich(["Bread", "Lettuce", "Egg", "Mayonnaise"]);
make_sandwich(["egg", "Swiss Cheese", "Mustard"]);
make_sandwich(["Peanut Butter", "Jelly"]);
