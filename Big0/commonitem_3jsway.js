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


// In javascript specific code

function containsItem(array1, array2) {
    return array1.some(item => array2.includes(item));
}

console.log(containsItem(array1, array2));

console.log(containsItem(array3, array4));
