const pattern = "abba"
const s = "dog cat cat dog"
// const pattern = "abba", s = "dog cat cat fish"

var wordPattern = function(pattern, s) {
    const splitedStr = s.split(" ")
    
    if (pattern.length !== splitedStr.length) return false;

    const sMap = new Map();
    const pMap = new Map();

    for (let i = 0; i < pattern.length; i++) {
      if (sMap.has(splitedStr[i]) && sMap.get(splitedStr[i]) !== pattern[i]){
        return false
      }
      if (pMap.has(pattern[i]) && pMap.get(pattern[i]) !== splitedStr[i]) {
        return false
      }

      sMap.set(splitedStr[i], pattern[i])
      pMap.set(pattern[i], splitedStr[i])
    }
    return true

};

let res = wordPattern(pattern, s)
console.log(res);

const c = "anagram"
const d = "nagaram"
let cSpl = c.split('')
let dSpl = d.split("")
console.log(cSpl.sort().join(""));
console.log(dSpl.sort().join(""));

if (cSpl.sort().join("") !== dSpl.sort().join("")) {
  console.log('not');
} else {
  console.log('yep');
}
c.split('');