/* 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. */
// Define an interface to represent a car
interface Car {
    brand: string;
    model: string;
    year: number;
    color: string;
    isElectric: boolean
}

const cars: Car[] = [
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
cars.forEach((car, index) => {
    console.log(`Car ${index + 1}:`);
    console.log(`Make: ${car.brand}`);
    console.log(`Model: ${car.model}`);
    console.log(`Year: ${car.year}`);
    console.log(`Color: ${car.color}`);
    console.log(`Color: ${car.isElectric}`);
    console.log("------------------------");
});
