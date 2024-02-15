const nums = [2,3,1,1,4]
// const nums = [3,2,1,0,4]
function canJump(nums){
    let highestJum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > highestJum) {
            return false
        } else {
            highestJum = Math.max(highestJum, i + nums[i])
        }
    }
    return true
}
let result = canJump(nums)
console.log(result)