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
