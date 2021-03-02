// We have to merge sorted Arrays.
// Given = [0,3,4,1] and [4,6,30]

function mergeSortedArrays(array1, array2) {

    if (array1.length === 0) {
        return array2
    } else if (array2.length === 0) {
        return array1
    } else {
        const mergedArray = [];
        let array1item = array1[0]
        let array2item = array2[0]
        let i = 1;
        let j = 1;
        while (array1item || array2item) {
            console.log(array1item, array2item);
            if (!array2item || array1item < array2item) {
                mergedArray.push(array1item)
                array1item = array1[i]
                i++;
            } else {
                mergedArray.push(array2item)
                array2item = array2[j]
                j++;
            }
        }
        return mergedArray;
    }

}

console.log(mergeSortedArrays([0, 3, 4], [5, 6, 30]));