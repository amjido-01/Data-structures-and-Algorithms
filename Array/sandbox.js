// class GetRandom {
//     constructor() {
//         this.map = {}
//         this.arr = []
//     }

//     insert(val) {
//         if(this.map[val] !== undefined) {
//             return false
//         }

//         this.arr.push(val)
//         this.map[val] = this.arr.length-1
//         return true
//     }

//     remove(val) {
//         if (this.map[val] === undefined) {
//             return false
//         }

//         const lastIdx = this.arr.length-1
//         const idx = this.map[val]
//         const lastVal = this.arr[lastIdx]

//         this.arr[idx] = lastVal
//         this.map[lastVal] = idx

//         delete this.map[val]
//         this.arr.pop()
//         return true
//     }

//     getRandomize() {
//         const rand = Math.floor(Math.random() * this.arr.length)
//         return this.arr[randomIndex];
//     }
// }



// var romanToInt = function(s) {
//     const map = {
//         "I":1,
//         "V":5,
//         "X":10,
//         "L":50,
//         "C":100,
//         "D":500,
//         "M":1000,
//         }
        
//         let res = 0;
//         for (let i = 0; i < s.length; i++) {
//             console.log(map[s[i]]);
//             if (map[s[i+1]] > map[s[i]]) {
//                 res += map[s[i+1]] - map[s[i]]
//                 i++
//             } else {
//                 res += map[s[i]]
//             }
//         }
//         return res
// };

// let val = romanToInt('MCMXCIV')
// console.log(val);

var reverseWords = function(s) {
    let splited = s.split(" ")
    console.log(splited);
    const filtered = splited.filter((item) => item !== "");
    console.log(filtered);
    return filtered.reverse().join(" ")
};
let val = reverseWords("the sky is blue")
console.log(val);