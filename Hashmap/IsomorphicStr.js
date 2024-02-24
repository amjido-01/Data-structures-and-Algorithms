const s = 'paper'
const t = 'title'
function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sMap = {}; 
    const tMap = {}; 

    for (let i = 0; i < s.length; i++) {

        if ((sMap[s[i]] && sMap[s[i]] !== t[i]) || (tMap[t[i]] && tMap[t[i]] !== s[i])) {
            return false;
        }
        console.log(sMap);
        console.log(tMap);

        sMap[s[i]] = t[i]; 
        tMap[t[i]] = s[i];
    }
    return true;
}

const res = isIsomorphic(s, t)
console.log(res);