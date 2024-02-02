  function strStr2(haystack, needle) {
    // Check for edge cases
    console.log(haystack.length, 'hy')
    if (needle === "") return 0;
    if (needle.length > haystack.length) {
        return -1;
    }

    // Iterate through the haystack
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // Check for a match
        let c = haystack.slice(i, i + needle.length)
        if (c === needle) {
            return i;
        }
    }

    // Return -1 if no match is found
    return -1;
}

const example1Haystack = "leetcode";
const example1Needle = "leeto";
console.log(strStr2(example1Haystack, example1Needle)); 

// const example2Haystack = "leetcode";
// const example2Needle = "leeto";
// console.log(strStr(example2Haystack, example2Needle)); 
