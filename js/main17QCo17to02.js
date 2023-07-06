// Objects
// key-value pairs in curly braces
const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

for (let job in band) {
    console.log(`On ${job}, it is ${band[job]}!`);
}