var arrayOfCelsiusValues = [-2, 34, 56, -10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value) {
    let far = ((value x 1.8) - 32)
    return far;

});

console.log(arrayOfFahrenheitValues);

// Given an array of militar hours
var militaryHours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

// You first define a function that receives militaryHours and returns its equivalent in civilian time
var militaryToCivilian = function(hour) {
    if (hour == 12) return hour + "pm";
    else if (hour == 24) return hour - 12 + "am";
    else if (hour > 11) return hour - 12 + "pm";
    else return hour + "am";
}

// you can create a new one of civilian hours by mapping the original array but passing the militaryToCivilian function to the map function
var civilianHours = militaryHours.map(militaryToCivilian);

console.log(civilianHours);