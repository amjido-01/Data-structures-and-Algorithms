let s = "abc";
let t = "ahbgdc";

function subSequence(s, t) {
    let i = 0;
    let j = 0;
    let len_of_s = s.length;
    let len_of_t = t.length;
    while (i < len_of_s && j < len_of_t) {
        if (s[i] === t[i]) {
            i++;
            j++
        } else {
            j++;
        }
    }
    return i === len_of_s
}

console.log(subSequence(s, t));