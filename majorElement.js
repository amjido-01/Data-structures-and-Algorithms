const nums = [2,2,1,1,1,2,2,2]

const major = (nums) => {
    const sorted = nums.sort((a, b) => a - b );
    const majorElement = sorted[nums.length/2];
    console.log(majorElement);
}


major(nums)