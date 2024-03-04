const s = "anagram", t = "nagaram"
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const hashMap = {};

    for (let i = 0; i < s.length; i++) {
        hashMap[s[i]] = (hashMap[s[i]] || 0) + 1
    }
    
    for (let i = 0; i < t.length; i++) {
        if (!hashMap[t[i]]) {
            return false
        }
         if (hashMap[t[i]] && hashMap[t[i]] > 0) {
            hashMap[t[i]]--
         }
    }
    let sum = 0;

    for (const value of Object.values(hashMap)) {
    sum += value;
    }
    
    return sum === 0
}

let res = isAnagram(s, t)
console.log(res);


// if (s.length !== t.length) {
//     return false
// }
// let sSlice = s.split('')
// let tSlice = t.split("")
// let sSorted = sSlice.sort().join("")
// let tSorted = tSlice.sort().join("")
// if (sSorted !== tSorted) {
//     return false;
// }
// return true;