function mergeSort(array) {
    console.log(array)
    if (array.length < 2) return array
    else {
        let mid = Math.floor(array.length/2);
        
        let left = mergeSort(array.slice(0, mid));
        let right = mergeSort(array.slice(mid, array.length));
        
        return merge(left, right);
    }
}

function merge(left, right) {
    let array = []

    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            array.push(left.shift());
        }
        else {
            array.push(right.shift());
        }
    }

    if (left.length > 0)
        array.push(left)
    else
        array.push(right)
    return array;
}

let array = [1,8,2,7,3,6,4,5]
let res = mergeSort(array)
console.log(`unsorted array: ${array}`)
console.log(`mergesort result: ${res}`)


// // Test merge function
// let left = [1, 3, 5, 7]
// let right = [2, 4]
// console.log(`merge: ${merge(left, right)}`);