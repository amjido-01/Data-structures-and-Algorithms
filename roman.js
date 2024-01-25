const romanToInteger = (s) => {
    const vals = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
      };
      let result = 0;

      for (let i = 0; i < s.length; i++) {
        if (vals[s[i]] < vals[s[i + 1]]) {
          result += vals[s[i + 1]] - vals[s[i]]
          i++
        } else {
          result += vals[s[i]]
        }
      }

      return result
}

const total = romanToInteger('CL')
console.log(total)