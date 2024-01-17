const nums = [1, 2, 3, 8];
const target = 5;

const twoSum = (arr, tar) => {
    let vals = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === tar) {
                vals.push(arr[i], arr[j])
            }
        }
    }
    console.log(vals);
}

twoSum(nums, target)