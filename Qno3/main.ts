// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
//  uppercase, and titlecase.

let personName: string = "LeenBaksh";

let lowercaseName: string = personName.toLowerCase();
console.log("Lowercase:", lowercaseName);

let uppercaseName: string = personName.toUpperCase();
console.log("Uppercase:", uppercaseName);

let titlecaseName: string = personName.replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Titlecase:", titlecaseName);
