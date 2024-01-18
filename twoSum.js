const nums = [2,11,15, 7];
const target = 9;

const twoSum = (arr, target) => {
    let map = {};
  for (let i = 0; i < nums.length; i++) {
      const difference = target - nums[i];
      if (map[difference] !== undefined) {
          return [map[difference], i]
      }
      map[nums[i]] = i;
  }
}

const result = twoSum(nums, target)
console.log(result);