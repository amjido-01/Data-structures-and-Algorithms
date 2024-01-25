const strs = ["flower","flow","flight"]
var longestCommonPrefix = function(strs) {
    let prefix = ''
    for (let i = 0; i < strs.length; i++) {
        console.log(strs[i][0]);
        if (strs[i][0] === strs[i][0]) {
            prefix = strs[i[0]]
        } else {
            console.log('not');
        }
    }
    console.log(prefix);
};


longestCommonPrefix(strs)