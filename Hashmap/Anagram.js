// const s = "anagram", t = "nagaram"
const s = "rat", t = "car"
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    let sMap = {}
    let tMap = {};

    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] || 0) + 1
        tMap[t[i]] = (tMap[t[i]] || 0) + 1
    }
        console.log(sMap);
        console.log(tMap);
    for (let i = 0; i < s.length; i++) {
        console.log(s);
        if (tMap[s[i]] && sMap[s[i]] == tMap[s[i]]) {
            return true
        }
    }
    return false
    // console.log(sMap);
    // console.log(tMap);
};

console.log(isAnagram(s, t))