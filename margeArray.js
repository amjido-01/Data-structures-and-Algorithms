const nums1 = [1,2,3,0,0,0] //m = 3
const nums2 = [2,5,6] //n = 3
console.log(nums2.length)

// output = [1,2,2,3,5,6]  m+n = 6

// brutal force solution.
var merge = function(nums1, m, nums2, n) {
    for (let  i = 0; i < nums2.length; i++) {
        if (i < n) {
            nums1.push(nums2[i])
        }
    }
    nums1.sort((a, b) => {
      return a-b;
    })
    console.log(nums1);
};

// merge(nums1, 3, nums2, 3)
// nums1, m, nums2, n
var merge2 = function (nums1, m, nums2, n) {
  let i = m -1; // first pointer
  let j = n -1  // second pointer
  let k = m + n -1  // third pointer

  while(i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--]
    } else {
      nums1[k--] = nums2[j--]
    }
  }
   while(j >= 0) {
    nums1[k--] = nums2[j]
   }

   console.log(nums1);
};

  merge2(nums1, 3, nums2, 3)