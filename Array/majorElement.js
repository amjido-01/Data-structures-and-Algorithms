const nums = [2,2,1,1,1,2,2,2]
const nums2 = [3,2,3]

var majorityElement = function(nums) {
   const sorted = nums.sort((a, b) => a -b)
   const middleVal = sorted.length/2
   const majorElem = sorted[Math.floor(middleVal)]
   return majorElem
};


let result = majorityElement(nums)
console.log(result);