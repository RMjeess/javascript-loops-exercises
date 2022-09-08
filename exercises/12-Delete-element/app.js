var people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

function deletePerson(str) {
  return people.filter((element) => element != str);
}


//deletePerson = (str) => people.filter((element) => element != str);

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
