// Objects
// key-value pairs in curly braces
const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrroooom!";
    }
}

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); // Inheritance
console.log(truck.engine()); // Inheritance

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
    return "Whoooosh!";
};
console.log(car);
console.log(car.wheels);
console.log(car.engine());