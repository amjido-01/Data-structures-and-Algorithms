class RecentCounter {
    constructor() {
        this.myQueue = []
    }

    ping(t) {
        this.myQueue.push(t)
        while (this.myQueue.length) {
            if (this.myQueue[0] < t - 3000) {
                this.myQueue.shift()
            } else {
                break
            }
        }
    }
}

const myRecentCounter = new RecentCounter()
myRecentCounter.ping(1)
myRecentCounter.ping(100)
myRecentCounter.ping(3001)
myRecentCounter.ping(3002)
