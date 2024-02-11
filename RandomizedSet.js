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

const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1)); // Inserts 1 to the set. Returns true.
console.log(randomizedSet.remove(2)); // Returns false as 2 does not exist in the set.
console.log(randomizedSet.insert(2)); // Inserts 2 to the set, returns true.
console.log(randomizedSet.getRandom()); // Returns either 1 or 2 randomly.
console.log(randomizedSet.remove(1)); // Removes 1 from the set, returns true.
console.log(randomizedSet.insert(2)); // 2 was already in the set, so return false.
console.log(randomizedSet.getRandom()); 