/*  22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make
one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error
before closing the program.  */
var cars = [
    {
        brand: "Toyota",
        model: "Camry",
        year: 2020,
        color: "Silver",
        isElectric: false
    },
    {
        brand: "Tesla",
        model: "Model 3",
        year: 2023,
        color: "Blue",
        isElectric: true
    },
    {
        brand: "Ford",
        model: "Mustang",
        year: 2022,
        color: "Red",
        isElectric: false
    }
];
var invalidIndex = 10;
var car = cars[invalidIndex];
console.log("Car:");
console.log("Brand: ".concat(car.brand));
console.log("Model: ".concat(car.model));
console.log("Year: ".concat(car.year));
console.log("Color: ".concat(car.color));
console.log("IsElectric: ".concat(car.isElectric));
