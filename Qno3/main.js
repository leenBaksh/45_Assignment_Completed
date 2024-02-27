// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
//  uppercase, and titlecase.
var personName = "LeenBaksh";
var lowercaseName = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);
var uppercaseName = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);
var titlecaseName = personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("Titlecase:", titlecaseName);
