class GetRandom {
    constructor() {
        this.map = {}
        this.arr = []
    }

    insert(val) {
        if(this.map[val] !== undefined) {
            return false
        }

        this.arr.push(val)
        this.map[val] = this.arr.length-1
        return true
    }

    remove(val) {
        if (this.map[val] === undefined) {
            return false
        }

        const lastIdx = this.arr.length-1
        const idx = this.map[val]
        const lastVal = this.arr[lastIdx]

        this.arr[idx] = lastVal
        this.map[lastVal] = idx

        delete this.map[val]
        this.arr.pop()
        return true
    }

    getRandomize() {
        const rand = Math.floor(Math.random() * this.arr.length)
        return this.arr[randomIndex];
    }
}