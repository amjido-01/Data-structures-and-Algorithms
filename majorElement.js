const nums = [2,2,1,1,1,2,2,2]

const major = (nums) => {
    const sorted = nums.sort((a, b) => a - b );
    console.log(sorted);
}


major(nums)