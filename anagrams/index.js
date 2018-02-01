// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanAndSort(stringA) === cleanAndSort(stringB);
}

function cleanAndSort(str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     let cleanStringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//     let cleanStringB = stringB.replace(/[^\w]/g, "").toLowerCase();

//     if( cleanStringA.length !== cleanStringB.length ){
//         return false;
//     } else {
//         let stringACharMap = genCharMap(cleanStringA);
//         let stringBCharMap = genCharMap(cleanStringB);

//         for(let key in stringACharMap) {
//             if(stringACharMap[key] && stringBCharMap[key]){
//                 if(stringACharMap[key] !== stringBCharMap[key])
//                     return false;
//             } else {
//                 return false;
//             }
//         }
//         return true;  
//     }
// }

// function genCharMap(str) {
//     let charMap = {};
//     for(let char of str ){
//         if(charMap[char])
//             charMap[char]++;
//         else  
//             charMap[char] = 1;
//     }
//     return charMap;
// }