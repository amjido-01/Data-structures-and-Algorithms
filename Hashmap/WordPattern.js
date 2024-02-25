const pattern = "abba"
const s = "dog cat cat dog"
// const pattern = "abba", s = "dog cat cat fish"

var wordPattern = function(pattern, s) {
    const words = s.split(' ');
  
    if (pattern.length !== words.length) {
      return false;
    }
  
    const sMap = {};
    const pMap = {};
  
    for (let i = 0; i < pattern.length; i++) {
      if (sMap[words[i]] && sMap[words[i]] !== pattern[i]) {
        return false;
      }
      if (pMap[pattern[i]] && pMap[pattern[i]] !== words[i]) {
        return false;
      }
      sMap[words[i]] = pattern[i];
      pMap[pattern[i]] = words[i]
    }
  
    return true;
  };

let res = wordPattern(pattern, s)
console.log(res);