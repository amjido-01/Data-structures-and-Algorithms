const nums = [1, 2, 3, 8];
const target = 5;

// const twoSum = (arr, tar) => {
//     let vals = [];

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === tar) {
//                 vals.push(i, j)
//                 return vals
//             }
//         }
//     }
// }

// const result = twoSum(nums, target)
// console.log(result)

const twoSum = (arr, tar) => {
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = i;
        let diff = tar - arr[i];
        if (map[diff] !== undefined) {
            return [numObj[complement], i];
        }
        numObj[nums[i]] = i;
    }
}

const result = twoSum(nums, target)
console.log(result)
