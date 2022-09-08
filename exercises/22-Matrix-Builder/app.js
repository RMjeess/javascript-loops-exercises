let matrixBuilder = (num) =>{
  let matrix = [];
  let randomizer = Math.floor(Math.random() * num)
  for(var i = 0; i < num; i++){
    matrix[i] = new Array();
      for(var j = 0; j < num; j++){
        random = Math.round(Math.random()*1);
        matrix[i][j] = random;
      }
              
  }
  return matrix
}
console.log(matrixBuilder(5))
