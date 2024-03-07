// const nums = [100,4,200,1,3,2]
const nums = [0,3,7,2,5,8,4,6,0,1]
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);

    let longestStreak = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!numSet.has(nums[i] - 1)) {
            let currNum = nums[i];
            let longestCount = 1;

            while(numSet.has(currNum + 1)) {
                currNum++
                longestCount++
            }
        longestStreak = Math.max(longestStreak, longestCount)
        }
    }
    return longestStreak;
}

let res = longestConsecutive(nums)
console.log(res);