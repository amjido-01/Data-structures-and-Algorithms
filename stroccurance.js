function strStr(haystack, needle) {
    // 1. Handle edge cases:
    if (needle === "") return 0; // Empty needle is always found at index 0
    if (haystack.length < needle.length) return -1; // Needle longer than haystack
  
    // 2. Iterate through haystack:
    for (let i = 0; i <= haystack.length - needle.length; i++) {
      // 3. Potential match check:
      if (haystack.charAt(i) === needle.charAt(0)) {
        // 4. Substring comparison:
        const potentialMatch = haystack.substring(i, i + needle.length);
        if (potentialMatch === needle) {
          // 5. Match found:
          return i;
        }
      }
    }
  
    // 6. No match found:
    return -1;
  }

  
  function strStr(haystack, needle) {
    // Check for edge cases
    if (needle.length > haystack.length) {
        return -1;
    }

    // Iterate through the haystack
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // Check for a match
        if (haystack.slice(i, i + needle.length) === needle) {
            return i;
        }
    }

    // Return -1 if no match is found
    return -1;
}

// Test examples
const example1Haystack = "sadbutsad";
const example1Needle = "sad";
console.log(strStr(example1Haystack, example1Needle));  // Output: 0

const example2Haystack = "leetcode";
const example2Needle = "leeto";
console.log(strStr(example2Haystack, example2Needle));  // Output: -1
