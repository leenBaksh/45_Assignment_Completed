/*  22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make 
one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error 
before closing the program.  */

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

const invalidIndex = 10;
const car = cars[invalidIndex]; 

console.log("Car:");
console.log(`Brand: ${car.brand}`);
console.log(`Model: ${car.model}`);
console.log(`Year: ${car.year}`);
console.log(`Color: ${car.color}`);
console.log(`IsElectric: ${car.isElectric}`);