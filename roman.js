var romanToInt = function(s) {
    const vals = {
        I : 1,
        V : 5,  
        X : 10,  
        L : 50,  
        C : 100, 
        D : 500, 
        M : 1000
    }
    let res = 0;
    for(let i = 0; i < s.length; i++) {
        if (vals[s[i]] < vals[s[i + 1]]) {
            res += vals[i + 1] - vals[s[i]];
            i++
        } else {
            res += vals[s[i]]
        }
    }
    return res
};

let result = romanToInt(IV)
console.log(result);


const test = (s) => {
    
}
const legend = {
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
  };
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (legend[s[i]] < legend[s[i+1]]) {
      total += legend[s[i+1]] - legend[s[i]];
      i++;
    } else {
      total += legend[s[i]];
    }
  }

  return total;
};