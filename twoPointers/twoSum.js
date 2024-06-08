let arr = [2, 7, 11, 15];
let target = 9

function twoSum(arr, target) {
    let left = 0;
    let right = arr.length-1;

    while(arr[left] + arr[right] !== target) {
        if (arr[left] + arr[right] > target) {
            right--
        } else {
            left++
        }
    }
    return [left+1, right+1]
}

console.log(twoSum(arr, 9))