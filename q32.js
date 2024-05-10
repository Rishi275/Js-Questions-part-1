// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array

//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array

let countries = ['Finland', 'America', 'Iceland', 'india', 'Ireland', 'japan', 'Netherlands', 'Poland', 'Switzerland', 'Thailand',
    'inra', 'Zealand', 'England', 'Scotland', 'Somaliland', 'Puntland', 'unan', 'UN', 'UK']

let newArray = countries.filter(x => x.includes("land"));

let fourChar = countries.filter((e) => e.length == 7);

let moreThanTwo = countries.filter((x) => x.length > 2);

let revArrayCapt = countries.reverse().toString().toUpperCase();
console.log(newArray);
console.log(fourChar);
console.log(moreThanTwo);
console.log(revArrayCapt);

// -------------------------------------------------------------------------------------
let len = "";
let longest = "";

for (let i = 0; i <= countries.length - 1; i++) {
    if (countries[i].length > len) {
        len = countries[i].length;
        longest = countries[i];
    }
}
console.log(longest);
