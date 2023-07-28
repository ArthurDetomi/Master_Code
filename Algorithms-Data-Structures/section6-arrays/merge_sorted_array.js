// first tought very strange, two classified arrays
function merge_sorted_arrays(array1 = [], array2 = []) {
    const length1 = array1.length;
    const length2 = array2.length;

    if (length1 === 0) {
        return array2;
    }
    if (length2 === 0) {
        return array1;
    }

    let mergedArray = [];
    let pos1 = 0, pos2 = 0;

    while (pos1 < length1 || pos2 < length2) {
        if (pos2 >= length2 || array1[pos1] < array2[pos2]) {
            mergedArray.push(array1[pos1++]);
        } else {
            mergedArray.push(array2[pos2++]);
        }
    }

    return mergedArray;
}
// main
let numbers1 = [0, 3, 4, 31];
let numbers2 = [4, 6, 30];

console.log(merge_sorted_arrays(numbers1, numbers2));