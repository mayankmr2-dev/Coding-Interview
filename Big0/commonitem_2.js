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

// 1.first we will store array1 items in object iterate using a for loop
// 2. We will compare the array2 items with 1st and then return true or false


function commonItem(array1, array2) {
    const map = {};
    for (let i = 0; i < array1.length; i++) {
        if (!map[array1[i]]) {
            let item = array1[i];
            map[item] = true;
        }
    }

    for (let j = 0; j < array2.length; j++) {
        if (map[array2[j]]) {
            return true
        }
    }
    return false
}

console.log(commonItem(array3, array4));    
