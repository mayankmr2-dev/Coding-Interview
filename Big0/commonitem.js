// Given 2 arrays, create a function that lets a user know (true/false) whether
// these two arrays contain any common  ITEMS.
// Eg. 
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
// o/p - false
// --------------------------------
const array3 = ['a', 'b', 'c', 'x'];
const array4 = ['z', 'y', 'x'];
// o/p - true


function commonItem(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) return true;
        }
    }
    return false
}

console.log(commonItem(array1, array2));  // false

console.log(commonItem(array3, array4));   // true