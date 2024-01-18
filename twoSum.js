const nums = [2,11,15, 7];
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


//