const nums = [1, 1, 2];
const expectedArr = [];

const removeDup = (arr, expectedArr) => {
   let map = {};

   for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = true
   }
   console.log(map);
    for (let j = 0; j < arr.length; j++) {
        if (map[arr[j]] && !expectedArr.includes(arr[j])) {
            expectedArr.push(arr[j])
        }
    }
    console.log(expectedArr, 'hy');
}

let result = removeDup(nums, expectedArr)
console.log(result)