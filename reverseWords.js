// const s = "  hello world  "
const s = "a good   example"
var reverseWords = function(s) {
    let trimed = s.split(' ')
    let arranged = trimed.filter(word => word !== '')
    return arranged.reverse().join(' ')
};

let result = reverseWords(s)
console.log(result);