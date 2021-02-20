// Given nums =  [2,7,11,5], target = 9
a1 = [2, 7, 11, 5]
target = 9

a2 = [3, 2, 4]
t1 = 6

a3 = [3, 3]
t2 = 6

function twoSum(numsArr, target) {
    const storage = {}
    for (let [index, num] of numsArr.entries()) {
        if (storage[num] !== undefined) return [storage[num], index];
        storage[target - num] = index;
    }
}

console.log(twoSum(a3, t2));
console.log(twoSum(a1, target));
console.log(twoSum(a2, t1));

/*
[ 0, 1 ]
[ 0, 1 ]
[ 1, 2 ]
*/