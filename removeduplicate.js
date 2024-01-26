const nums = [1, 1, 2];


// brutal force solution
const removeDup = (arr) => {
   let map = {};
   let expectedArr = [];

   for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = true
   }
   console.log(map);
    for (let j = 0; j < arr.length; j++) {
        if (map[arr[j]] && !expectedArr.includes(arr[j])) {
            expectedArr.push(arr[j])
        }
    }
    return expectedArr
}



const removeDup2 = function(nums) {
    let map = {};
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = true;
            nums[k] = nums[i];
            k++;
        }
    }

    nums.length = k;

    return k;
};


// the best solution over all
// const nums = [1, 1, 2];
const removeDup3 = (nums) => {
    let k = 1;

    for (let i = 0; i < nums.length -1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[k] = nums[i + 1];
            k++
            // console.log(k++)
        }
    }
    return k
}

// const result = removeDup3(nums)
// console.log(result);



const removeDuplicates = function (nums) {
    if (!nums.length) return 0;
  
};
  
  
  
  const nums2 = [1,1,1,2,2,3]
  const result2 = removeDuplicates(nums2)
  console.log(nums2[-2]);
  console.log(result2)