console.log('***** Music Collection *****')
let Collection = []

function addCollection(tittle, artist, yearPublished) {

    let music = {
        tittle: tittle,
        artist: artist,
        yearPublished: yearPublished
    }

    Collection.push(music);
    return music
}
console.log(addCollection("as you are", "the weekend", 2021));
console.log(addCollection("life change", "one direction", 2014));
console.log(addCollection("hello", "adele", 2015));
console.log(addCollection("pay phone", "maroon 5", 2012));
console.log(addCollection("save your tears", "the weekend", 2021));
console.log(addCollection("one republic", "run", 2021));

// console.log(Collection)

function showCollection(arrayInput) {
    console.log(arrayInput.length);
    for (let i = 0; i < arrayInput.length; i++) {
        console.log(`${arrayInput[i].tittle} by ${arrayInput[i].artist} published in ${arrayInput[i].yearPublished}`);
    }
}

showCollection(Collection)

function findByArtist(artist) {
    // iterate over collection
    // establish condition
    // grab every MUSIC object, that meets condition
    // return matching object 
    let results = [];
    for (let i = 0; i < Collection.length; i++) {
        if (Collection[i].artist === artist) {
            results.push(Collection[i])
        }
    }
    return results;
}

const test = findByArtist("one direction");
console.log('test: ', test)