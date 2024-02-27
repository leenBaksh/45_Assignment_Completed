var cars = [
    {
        brand: "Toyota",
        model: "Camry",
        year: 2020,
        color: "Silver",
        isElectric: false,
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
console.log("List of cars:");
cars.forEach(function (car, index) {
    console.log("Car ".concat(index + 1, ":"));
    console.log("Make: ".concat(car.brand));
    console.log("Model: ".concat(car.model));
    console.log("Year: ".concat(car.year));
    console.log("Color: ".concat(car.color));
    console.log("Color: ".concat(car.isElectric));
    console.log("------------------------");
});
