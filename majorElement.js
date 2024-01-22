const nums = [2,2,1,1,1,2,2,2]
const nums2 = [3,2,3]

var majorityElement = function(nums) {
    const sorted = nums.sort((a, b) => a - b);
    const numsLength = nums.length/2;
    const actual = Math.floor(numsLength);
    const majorElement = sorted[actual]
    return majorElement;
};


let result = majorityElement(nums2)
console.log(result);