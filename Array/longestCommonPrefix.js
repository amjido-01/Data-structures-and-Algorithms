const strs = ["flower","flow","flight"]
var longestCommonPrefix = function(strs) {
    let prefix = '';
    if (strs.length === '') return prefix;

    for (let i = 0; i < strs[0].length; i++) {
        const character = strs[0][i]
        console.log(character);
        for (let j = 0; j < strs.length; j++) {
            const see = strs[j][i]
            console.log(see,"cee");
            if (see !== character) return prefix
        }
        prefix += character
    }
    return prefix

};


let test = longestCommonPrefix(strs)
console.log(test);
