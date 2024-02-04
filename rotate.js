const nums = [1,2,3,4,5,6,7]
const k = 3;

// Helper function to reverse the elements in the array from start to end
const reverseArray = function(nums, start, end) {
    while (start < end) {
        // Swap elements at start and end indices using destructuring assignment
        [nums[start], nums[end]] = [nums[end], nums[start]];
        
        // Move indices towards the center
        start++;
        end--;
    }
};

const rotate = function(nums, k) {
    // Step 1: Calculate effective rotation steps
    k = k % nums.length;
    console.log(k);

    // [7, 6, 5, 4, 3, 2, 1]
    nums.reverse()
    
    // Step 3: Reverse the first k elements
    // [5, 6, 7]
    // [5,7,6]
    //[5, 6, 7]
    reverseArray(nums, 0, k - 1);
    
    // Step 4: Reverse the remaining elements
    reverseArray(nums, k, nums.length - 1);
};

// Example usage:
const nums1 = [1, 2, 3, 4, 5, 6, 7];
// rotate(nums1, 3);
// console.log(nums1);  






const rotateTwo = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]

        start++
        end--
    }
}
const testTwo = (nums, k) => {
    rotateTwo(nums, 0, nums.length-1)
    console.log(nums);

    rotateTwo(nums, 0, k-1)
    console.log(nums);

    rotateTwo(nums, k, nums.length-1)
}

testTwo(nums1, k)