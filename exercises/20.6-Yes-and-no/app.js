let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

let wikiWoko = theBools.map(i => {
    if (i == 1) {
        return "wiki";
    } else {
        return "woko";
    }
})

console.log(wikiWoko);