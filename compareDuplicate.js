// given 2 arrays, create a function that let's user know (true, false) whether these two arrays cantains common items.

// const arr1 = ['a', 'b', 'c', 'x'];
// const arr2 = ['z', 'y', 'i'];
// this will return false.

// const arr1 = ['a', 'b', 'c', 'x'];
// const arr2 = ['z', 'y', 'x'];
// this will return true.


// naive/brutal solution.
const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', 'x'];

const compareDuplicate = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j <arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true;
            }
        }
    }
    return false;
};

const result = compareDuplicate(arr1, arr2);
console.log(result);