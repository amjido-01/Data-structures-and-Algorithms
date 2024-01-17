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

// O(a * b);
// O(1);
// const result = compareDuplicate(arr1, arr2);
// console.log(result);



// Best solution.

const compareDuplicate2 = (arr1, arr2) => {
    const map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            map[arr1[i]] = true;
        }
    }
    // console.log(map)

    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }

    return false;
}

// const result = compareDuplicate2(arr1, arr2);
// console.log(result);



// Write a function that takes two arrays as input and returns an array containing the common elements between them.

const compareDuplicateAndReturnArr = (arr1, arr2) => {
    let map = {};
    let comparedElements = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            map[arr1[i]] = true;
        }
    }
    // console.log(map);

    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            let result = map[arr2[j]];
            comparedElements.push(arr2[j])
        }
    }
    console.log(comparedElements);
}

// compareDuplicateAndReturnArr(arr1, arr2)




// Modify the provided solution to handle case-insensitive string elements. For example, 'Apple' and 'apple' should be considered the same.

const firstArr = ['apple', 'orange', 'tomato'];
const secondArr = ['Apple', 'fish', 'banana'];

const compareDuplicateCaseInsensitive = (arr1, arr2) => {
    let map = {};
    let comparedSameElements = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
           let upper =  arr1[i].toUpperCase()
           map[upper] = true;
        }
    }
    // console.log(map);

    for (let j = 0; j < arr2.length; j++) {
        let upper = arr2[j].toUpperCase();
        if (map[upper]) {
            comparedSameElements.push(upper);
        }
    }
    console.log(comparedSameElements);
}

compareDuplicateCaseInsensitive(firstArr, secondArr)