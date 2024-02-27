/* 20 .Think of something you could store in a array. For example, you could make a list of mountains, rivers, 
countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items. */

const countries: string[] = [
    "Japan",
    "China",
    "Korean",
    "UK",
    "Tailand",
];

console.log("List of countries:");
countries.forEach(country => {
    console.log(country);
});
