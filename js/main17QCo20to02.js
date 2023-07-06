// Objects
// key-value pairs in curly braces
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

// destructuring objects
const { guitar: myGuitar, bass: myBass } = band;
console.log(myGuitar);
console.log(myBass);