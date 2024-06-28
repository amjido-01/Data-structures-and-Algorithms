var firstUniqChar = function(s) {
    let hashMap = {}
    let val = []
    // leetcode
    for (let char of s) {
        if (hashMap[char] === undefined) {
            hashMap[char] = 1
        } else {
            hashMap[char] = hashMap[char] + 1
        }
    }

    let nums = Object.keys(hashMap);
    for (let i of nums) {
        if (hashMap[i] === 1) {
            val.push(i)
        }
    }
    if (!val.length) {
        return -1
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s[i] === val[0]) {
                return i
            }
        }
    }
};

console.log(firstUniqChar('loveleetcode'))