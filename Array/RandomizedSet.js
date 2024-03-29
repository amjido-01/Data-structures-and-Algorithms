class RandomizedSet {
    constructor() {
        this.map = {};
        this.arr = []
    }

   insert(val) {
    if (this.map[val] !== undefined) {
        return false
    }

    this.arr.push(val)
    this.map[val] = this.arr.length-1
    return true

   }

    remove(val) {
        if(this.map[val] === undefined) {
            return false
        }
        // last index
        const lastIndex = this.arr.length -1;

        // get the index of the val
        const idx = this.map[val];
        // get the last element in the arr
        const lastVal = this.arr[lastIndex];
        // asign the val to the last index 
        this.arr[idx] = lastVal;

        this.map[lastVal] = idx;

        delete this.map[val];
        this.arr.pop();
    
        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.arr.length);
        return this.arr[randomIndex];
      }
}

// const randomizedSet = new RandomizedSet();
// console.log(randomizedSet.insert(1)); 
// console.log(randomizedSet.remove(2));
// console.log(randomizedSet.insert(2)); 
// console.log(randomizedSet.getRandom()); 
// console.log(randomizedSet.remove(1)); 
// console.log(randomizedSet.insert(2)); 
// console.log(randomizedSet.getRandom()); 


const hashmap = {
    1: 0,
    3: 1,
    6: 2
}
const list = [1,3,6]

// function removeval(map, nums, val) {
//     if (map[val] === undefined) {
//         return false
//     }
//     const lastIndx = nums.length-1
//     const idx = map[val]
//     const lastVal = nums[lastIndx]

//     arr[lastVal] = idx
//     map[idx] = lastVal

//     delete map[val]
//     arr.pop()
    

// }
// removeval(hashmap, list, 3)
