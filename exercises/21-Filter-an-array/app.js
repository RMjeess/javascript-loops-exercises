let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

let pickedNames = (name) => {
    return name.startsWith("R")
};

let resultingNames = allNames.filter(pickedNames);

console.log(resultingNames);