function lyricsGenerator(array) {
  let counterOfOnes = 0;
  let lyrics = "";
  for (let item of array){
      if (item == 1 && counterOfOnes < 2){
          counterOfOnes++;
          lyrics = lyrics + "Drop the base ";
      }else if (item == 1 && counterOfOnes == 2) {
          counterOfOnes = 0;
          lyrics = lyrics + "Drop the base !!!Break the base!!! ";
      } else if (item == 0){
          counterOfOnes = 0;
          lyrics = lyrics + "Boom ";
      } 
  }
  return lyrics;
}

console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))