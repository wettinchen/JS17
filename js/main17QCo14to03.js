// Objects
// key-value pairs in curly braces
const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vrroooom!";
    }
}

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
    return "Whoooosh!";
};
console.log(car);
console.log(car.wheels);
console.log(car.engine());

const tesla = Object.create(car);
tesla.engine = function () {
    return "Shhhhh...";
};
console.log(tesla);
console.log(tesla.wheels);
console.log(tesla.engine());