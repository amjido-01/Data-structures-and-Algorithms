const nums = [2,7,11,15];
const target = 9;

const twoSum = (arr, target) => {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (map[diff] !== undefined) {
            return [map[diff], i]
        }
        map[arr[i]] = i
    }
}

const result = twoSum(nums, target)
console.log(result);


// brute force
// const nums = [2,11,15, 7];

// const twoSum2 = (arr, tar) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j <arr.length; j++) {
//             if (arr[i] + arr[j] === tar) {
//                 return [ i, j]
//             }
//         }
//     }
// }

// const result2 = twoSum2(nums, target)
// console.log(result2);