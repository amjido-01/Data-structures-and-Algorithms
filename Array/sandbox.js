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



var romanToInt = function(s) {
    const map = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000,
        }
        
        let res = 0;
        for (let i = 0; i < s.length; i++) {
            console.log(map[s[i]]);
            if (map[s[i+1]] > map[s[i]]) {
                res += map[s[i+1]] - map[s[i]]
                i++
            } else {
                res += map[s[i]]
            }
        }
        return res
};

let val = romanToInt('MCMXCIV')
console.log(val);

const  ss =  "   fly me   to   the moon  "

var lengthOfLastWord = function(ss) {
    const arr = []
    const slpited = ss.split(" ");
    for (let i = 0; i < slpited.length; i++) {
        if (slpited[i] !== "") {
            arr.push(slpited[i])
        }
    }
    console.log(arr[arr.length-1].length);
};

let test = lengthOfLastWord(ss)
console.log(test);