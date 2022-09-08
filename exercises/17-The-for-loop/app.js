var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];

var sum = 0;

for (let number of myArray){
	 sum += number;	
	 //console.log(sum, number);
	 sum / myArray.length;
}

let average = (sum / myArray.length);
console.log(average);