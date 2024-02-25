// const pattern = "abba"
// const s = "dog cat cat dog"
// const pattern = "abba"
// const s = "dog cat cat fish"
const s = "aba"
const pattern ="dog cat cat"
// const pattern = "aaaa", s = "dog cat cat dog"

var wordPattern = function(pattern, s) {
    let splittedPattern = pattern.split(' ')
    if (splittedPattern.length !== s.length) {
        return false;
    }
    let pMap = {};
    let sMap = {};

    for (let i = 0; i < splittedPattern.length; i++) {
        pMap[splittedPattern[i]] = (pMap[splittedPattern[i]] || 0) + 1
    }
    
    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] || 0) + 1
    }
    console.log(sMap);
    
};

let res = wordPattern(pattern, s)
console.log(res);




// for (let i = 0; i < s.length; i++) {
//     pMap[pattern[i]] = (pMap[pattern[i]] || 0) + 1
// }


// for (let i = 0; i < splittedS.length; i++) {
//     sMap[splittedS[i]] = (sMap[splittedS[i]] || 0) + 1
// }

// let sLen = Object.keys(sMap).length
// let pLen = Object.keys(pMap).length
// console.log(sLen, pLen);
// console.log(pMap, sMap);

// for (let i = 0; i < s.length; i++) {
//     if (sLen !== pLen || sMap[s[i]] && sMap[s[i]] !== pattern[i]) {
//         return false
//     } 
// }
// return true