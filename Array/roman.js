// const romanToInteger = (s) => {
//     const vals = {
//         "I":1,
//         "V":5,
//         "X":10,
//         "L":50,
//         "C":100,
//         "D":500,
//         "M":1000
//       };
//       let result = 0;
//       for (let i = 0; i < s.length; i++) {
//         if (vals[s[i]] < vals[s[i + 1]]) {
//           result += vals[s[i + 1]] - vals[s[i]]
//           i++
//         } else {
//           result += vals[s[i]]
//         }
//       }
//       return result
// }

// const total = romanToInteger('MCMXCIV')
// console.log(total)


function intToRoman(num) {
  const romanMap = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
  ];
  let result = '';
  for (let [value, roman] of romanMap) {
    while(num >= value) {
        result += roman;
        num -= value
    }
  }
  return result
}

// Test cases
console.log(intToRoman(3));    // Output: "III"
console.log(intToRoman(58));   // Output: "LVIII"
console.log(intToRoman(1994)); // Output: "MCMXCIV"
