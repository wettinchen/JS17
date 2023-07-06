// Objects
// key-value pairs in curly braces
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

// destructuring objects
const { guitar: myVariable } = band;
console.log(myVariable);