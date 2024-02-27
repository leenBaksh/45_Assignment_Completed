/* 45.Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer 
and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information 
and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information
 was stored correctly.  */

function car_info(manufacturer: string, model: string, ...options: [string, any][]): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };
    for (let [key, value] of options) {
        car[key] = value;
    }
    return car;
}

let car = car_info("Toyota", "Camry", ["color", "blue"], ["year", 2023]);

console.log(car);
