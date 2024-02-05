const nums = [2,3,1,1,4]
// const nums = [3,2,1,0,4];
function canJump(nums) {
    let furthestJump = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > furthestJump) {
            console.log(furthestJump, 'h');
            return false;
        }
        furthestJump = Math.max(furthestJump, i+nums[i])
        console.log(furthestJump, 'hi');
    }
    let c = true;
    return c
}

let result = canJump(nums)
console.log(result);