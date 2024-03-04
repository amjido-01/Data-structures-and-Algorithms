function groupAnagrams(strs) {
    const groups = {};

    // Iterate through each word in the input array
    for (let i = 0; i < strs.length; i++) {
        const word = strs[i];
        // Sort each word alphabetically
        const sortedWord = word.split('').sort().join('');

        // Use the sorted word as a key to group anagrams
        if (!groups[sortedWord]) {
            groups[sortedWord] = [word];
        } else {
            groups[sortedWord].push(word);
        }
    }

    // Return the values of the object
    return Object.values(groups);
}

// Test cases
const strs1 = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs1)); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

const strs2 = [""];
console.log(groupAnagrams(strs2)); // Output: [[""]]

const strs3 = ["a"];
console.log(groupAnagrams(strs3)); // Output: [["a"]]
