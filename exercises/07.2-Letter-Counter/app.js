let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";

let counts = {};

const parArr = par.replaceAll(" ", "").toLowerCase().split("");

for (let i = 0; i < parArr.length; i++){
  let letter = parArr[i]; 
  if (counts[letter] == undefined){
    counts[letter] = parArr.filter(x => x === letter).length;
  }
  
}

console.log(counts);

