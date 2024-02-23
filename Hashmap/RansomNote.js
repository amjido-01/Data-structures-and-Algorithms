// const ransomNote = 'a';
// const magazine = 'b'
const ransomNote = 'aa';
const magazine = 'ab'
// const ransomNote = 'aab';
// const magazine = 'baa'

var canConstruct = function(ransomNote, magazine) {
    const hashMapCount = {};

    for (let i = 0; i < magazine.length; i++) {
        hashMapCount[magazine[i]] = (hashMapCount[magazine[i]] || 0) +1;
    }
    console.log(hashMapCount);

    for (let i = 0; i < ransomNote.length; i++) {
        if (hashMapCount[ransomNote[i]] && hashMapCount[ransomNote[i]] > 0) {
            hashMapCount[ransomNote[i]]--
        } else {
            return false
        }
    }
    return true
}

const res = canConstruct(ransomNote, magazine)
console.log(res);